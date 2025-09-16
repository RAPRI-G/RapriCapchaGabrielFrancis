const uploadForm = document.getElementById("uploadForm");
const pdfTableBody = document.querySelector("#pdfTable tbody");
const msgTableBody = document.querySelector("#msgTable tbody");

// PDFs y mensajes desde localStorage
let pdfList = JSON.parse(localStorage.getItem("pdfList")) || [];
let msgList = JSON.parse(localStorage.getItem("msgList")) || [];

// Renderizar PDFs en la tabla
function renderPDFTable() {
  pdfTableBody.innerHTML = "";
  pdfList.forEach((pdf,index)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pdf.titulo}</td>
      <td>
        <a href="${pdf.archivo}" target="_blank">Ver PDF</a>
        <a href="${pdf.archivo}" download="${pdf.titulo}.pdf"><i class="fas fa-download" style="margin-left:10px;color:#8e2de2;"></i></a>
      </td>
      <td>
        <button class="action-btn edit-btn" onclick="editPDF(${index})">Editar</button>
        <button class="action-btn delete-btn" onclick="deletePDF(${index})">Eliminar</button>
      </td>
    `;
    pdfTableBody.appendChild(tr);
  });
  // Guardar automáticamente para que `actividades.html` pueda acceder
  localStorage.setItem("pdfList", JSON.stringify(pdfList));
}

// Subir PDF
uploadForm.addEventListener("submit",function(e){
  e.preventDefault();
  const titulo = document.getElementById("titulo").value.trim();
  const archivoInput = document.getElementById("archivo");

  if(!titulo || !archivoInput.files.length) return alert("Completa todos los campos");

  const archivoURL = URL.createObjectURL(archivoInput.files[0]);
  pdfList.push({titulo, archivo:archivoURL});
  uploadForm.reset();
  renderPDFTable();
});

// Eliminar PDF
function deletePDF(index){
  if(confirm("¿Deseas eliminar este PDF?")){
    pdfList.splice(index,1);
    renderPDFTable();
  }
}

// Editar PDF
function editPDF(index){
  const nuevoTitulo = prompt("Ingrese nuevo título", pdfList[index].titulo);
  if(nuevoTitulo){
    pdfList[index].titulo = nuevoTitulo;
    renderPDFTable();
  }
}

// Render inicial PDFs
renderPDFTable();

// Renderizar mensajes de contacto
function renderMsgTable(){
  msgTableBody.innerHTML="";
  msgList.forEach(msg=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${msg.nombre}</td>
      <td>${msg.email}</td>
      <td>${msg.mensaje}</td>
    `;
    msgTableBody.appendChild(tr);
  });
}

// Render inicial mensajes
renderMsgTable();
