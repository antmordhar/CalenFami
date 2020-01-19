(function(window, undefined) {
  var dictionary = {
    "6974705c-1291-4631-97aa-bf04e3689dda": "CalenMes",
    "d8b3fa42-b023-4830-b9e8-88119259124c": "CalenSemana",
    "6db0133e-d5bd-4047-87f2-5851e36d344e": "ListaTareas",
    "77202763-33c1-438f-9108-fd610e194f41": "CompletarTarea",
    "3c0f18cc-31cd-4222-beda-2faf3236b3ed": "EdicionTarea",
    "60d84cda-b60d-459f-a101-104e6908260c": "Tarea",
    "ee3139ff-ea9b-42ab-a367-936809a38dd9": "Premio",
    "1611891d-dab8-4ff3-9b87-e2d20bbeecb9": "Template 1",
    "d5ca5aa5-bb48-49c4-a364-e2e13b23a0e1": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);