
function cargarTodo(){
    try{
        axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/db')
        .then(respuesta=>{
                let data=respuesta.data;
                let tabla=document.getElementById("contenidoApi");
                let datos="";
                for(let elemento of data.dispositivos){
                    datos+=`
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento}</td>
                        <td>${elemento.procesador}</td>

                    </tr>
                    `;
                }
                tabla.innerHTML=datos;
                
            })
    .catch(error=>{
        throw new Error("Error al solicitar: "+error)
    })
    }
    catch(error){
        console.error(error);
    }

}

function btnConsultar(){
    let idArticulo=document.getElementById("idArticulo").value;
    if (idArticulo==="" || idArticulo==="0"){
        alert("Debe ingresar un id válido");
        return;
    }
    console.log("Id Art: "+idArticulo);
    let url='https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/';
    url+=idArticulo;
    
    try{
        axios.get(url)
        .then(respuesta=>{
                let data=respuesta.data;
                let contador=0;
                for(let elemento in data){
                    if(contador!=0){
                        document.getElementById("txtArea"+contador).value=data[elemento];
                    }
                    contador++;
                }
                
                
            })
    .catch(error=>{
        throw new Error("Error al solicitar: "+error)
    })
    }
    catch(error){
        console.error(error);
    }
}

function btnAgregar(){
    let url='https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/';
    try{
    let datos={
         modelo:document.getElementById("txtMarca").value,
         marca:document.getElementById("txtModelo").value,
         color:document.getElementById("txtColor").value,
         almacenamiento:document.getElementById("txtAlmacenamiento").value,
         procesador:document.getElementById("txtProcesador").value
    };

    for (let elemento in datos){
        if(datos[elemento]===''){
            alert("Complete todos los campos");
            return;
        }
    }
   
        axios.post(url, datos)
        .then(respuesta=>{alert(`${datos.marca} agregado con éxito!`);
            limpiarAgregar();
            cargarTodo();
        })
        .catch(error=>{
            throw new Error("Error al agregar: "+error)
        })
    }
    catch(error){
        console.error(error);
    }
    
}

function btnModificar(){
    try{
        let id=document.getElementById("idArticulo").value;
        let datos={
            
            modelo:document.getElementById("txtArea1").value,
            marca:document.getElementById("txtArea2").value,
            color:document.getElementById("txtArea3").value,
            almacenamiento:document.getElementById("txtArea4").value,
            procesador:document.getElementById("txtArea5").value
        };

        if(id==='' || id==="0"){
            alert("Ingrese un id válido");
                return;
        }

        for (let elemento in datos){
            if(datos[elemento]==='' ){
                alert("Complete todos los datos");
                return;
            }
        }

        let url='https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+id;

        axios.put(url,datos)
        .then(respuesta=>{alert(`${datos.modelo} modificado exitosamente!`);
            cargarTodo();
        })
        .catch(error=>{
            throw new Error("Error al modificar: "+error);
        })


    }
    catch(error){
        console.error(error);
    }
}

function btnEliminar(){
    try{
        let id=document.getElementById("idArticulo").value;
        let modelo=document.getElementById("txtArea1").value;
        
        if(id==='' || id==="0"){
            alert("Ingrese un id válido");
                return;
        }


        let url='https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+id;

        axios.delete(url)
        .then(respuesta=>{alert(`${modelo} eliminado exitosamente!`);
            limpiarCampos()
            cargarTodo();    
        })
        .catch(error=>{
            throw new Error("Error al eliminar: "+error);
        })


    }
    catch(error){
        console.error(error);
    }
}

function limpiarCampos(){
        document.getElementById("idArticulo").value="";
        document.getElementById("txtArea1").value="";
        document.getElementById("txtArea2").value="";
        document.getElementById("txtArea3").value="";
        document.getElementById("txtArea4").value="";
        document.getElementById("txtArea5").value="";
}

function  limpiarAgregar(){
        document.getElementById("txtMarca").value="";
        document.getElementById("txtModelo").value="";
        document.getElementById("txtColor").value="";
        document.getElementById("txtAlmacenamiento").value="";
        document.getElementById("txtProcesador").value="";
}

/*function cargarTodo(){
    try{
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }

        })
        .then(respuesta=>respuesta.json())
        .then(data=>{
                let tabla=document.getElementById("contenidoApi");
                let datos="";
                for(let elemento of data.dispositivos){
                    datos+=`
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento}</td>
                        <td>${elemento.procesador}</td>

                    </tr>
                    `;
                }
                tabla.innerHTML=datos;
                
            })
    .catch(error=>{
        throw new Error("Error al solicitar: "+error)
    })
    }
    catch(error){
        console.error(error);
    }

}*/