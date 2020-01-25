(function(window, undefined) {
  var dictionary = {
    "bf5885f9-5ab1-491e-ae8e-1081867f624e": "GrupoGestor",
    "5aacc9af-7e24-4658-b0c3-301668e7462e": "EditarAniadirTask",
    "a293a7ae-aaba-443f-bddd-947b05cc0289": "Ranking",
    "e8449c6d-2a6d-45c9-afbb-51e206772495": "EditarAniadirGrupo",
    "8777ee7a-d1e4-462f-92a5-1fc8258fcf4f": "Mi perfil",
    "ff81c6e3-1cc5-45b1-b1b7-8f26cbc5ce29": "PerfilPublicoStarted",
    "7b62b470-8aa6-4ab5-b211-92e41a31f8fe": "calensemana",
    "05f4b5d6-e149-42ba-b4ed-6bba5b391312": "PerfilPublico",
    "0c9b2f68-549b-468d-aa6c-a56f921d7fa3": "TareasFilt",
    "cc05d2b2-5493-4245-aa55-7ee194726e14": "Tarea",
    "0d2c6e2c-1b10-4375-b13b-f4495888c38a": "RankingBusOptions",
    "9e4bddbd-863f-4d7b-ad66-77982255c1b0": "Editar",
    "6334c5b1-431a-4256-bf3e-9c785adc7561": "Tareas",
    "b34f2eb6-159b-453b-bc44-6eb5ed43818d": "EditarPopUp",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "d884a8e0-9701-4e00-9919-f810b688f6b7": "GruposNewPersona1",
    "f9e64236-fba3-4493-a2ec-5cf9bf2e8877": "TareaFiniquitada",
    "d6cd1133-fd04-4c42-be2c-8e748ba3449b": "GruposOtros",
    "290f2363-b957-4812-b4f0-c08003b29c24": "GrupoAniadir",
    "4fc9ed0e-10a1-48bd-957f-4ff3381ba62c": "Rankingoptions",
    "b31c4119-7a30-45f2-b8c3-145fad5598f5": "GrupoGestOptions",
    "78671b01-4a76-4f73-9303-410e24f92443": "Tarea acabada",
    "fb410e66-66c5-4cd8-85de-4ce02ecd8d04": "RankingBus",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
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