function doGet(e) {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Productos");
  const datos = hoja.getDataRange().getValues();
  const encabezados = datos.shift();

  console.log("Encabezados:", encabezados);
  console.log("Primera fila de datos:", datos[0]);

  const productos = datos.filter(fila => fila[0] !== "");

  const fichas = productos.map(fila => {
    const ficha = {};
    encabezados.forEach((titulo, i) => {
      ficha[titulo] = fila[i];
    });
    return ficha;
  });

  console.log("Primera ficha:", fichas[0]);
  console.log("Cantidad de productos:", productos.length);

  return ContentService
    .createTextOutput(JSON.stringify(fichas))
    .setMimeType(ContentService.MimeType.JSON);
}
