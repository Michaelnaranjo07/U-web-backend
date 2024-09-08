// app.js
document.addEventListener('DOMContentLoaded', function() {
    const productTableBody = document.getElementById('productTable').querySelector('tbody');

    // Función para obtener los datos de la API
    function fetchProducts() {
        fetch('http://localhost:8081/tipificacion1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                data.forEach(product => {
                    addProductToTable(product);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Función para agregar un producto a la tabla
    function addProductToTable(product) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="table-dark">${product.id}</td>
            <td class="table-dark">${product.cedula}</td>
            <td class="table-dark">${product.nombre}</td>
            <td class="table-dark">${product.apellido}</td>
            <td class="table-dark">${product.id_categoria}</td>
            <td class="table-dark">${product.estado}</td>
            <td class="table-dark">${product.fecha_ingreso}</td>
            <td class="table-dark">${product.fecha_retiro}</td>
            <td class="table-dark">${product.id_abogado}</td>           
        `;

        productTableBody.appendChild(row);
    }

    // Llamada a la función para obtener los productos al cargar la página
    fetchProducts();

    // Función para agregar un producto a la tabla
    function addProductToTable(product) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="table-dark">${product.id}</td>
            <td class="table-dark">${product.nombre}</td>
            <td class="table-dark">${product.estado}</td>
            <td class="table-dark">${product.id_categoria}</td>
            <td class="table-dark">${product.privilegio}</td>        
        `;

        productTableBody.appendChild(row);
    }

    // Llamada a la función para obtener los productos al cargar la página
    fetchProducts();

    // Función para agregar un producto a la tabla
    function addProductToTable(product) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="table-dark">${product.id}</td>
            <td class="table-dark">${product.id_proceso}</td>
            <td class="table-dark">${product.id_abogado}</td>
            <td class="table-dark">${product.estado_actual}</td>
            <td class="table-dark">${product.id_radicado}</td>
            <td class="table-dark">${product.fecha_cargue}</td>
            <td class="table-dark">${product.fecha_asignacion}</td>
            <td class="table-dark">${product.trazabilidad}</td>    
        `;

        productTableBody.appendChild(row);
    }

    // Llamada a la función para obtener los productos al cargar la página
    fetchProducts();
});