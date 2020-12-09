export const UtilFunctions = {
    getColor: function(name) {
        let color = "";
        switch (name) {
          case "Bala":
            color = "rgba(241,196,15,0.7)";
            break;
          case "Ezer":
            color = "rgba(231,77,60,0.7)";
            break;
          case "Gida":
            color = "rgba(230,125,34,0.7)";
            break;
          case "Lörcs":
            color = "rgba(52,152,219,0.7)";
            break;
          case "Marci":
            color = "rgba(115,244,255,0.7)";
            break;
          case "Manó":
            color = "rgba(46,204,112,0.7)";
            break;
          case "Preszi":
            color = "rgba(51,51,51,0.7)";
            break;
          case "Vendég":
            color = "rgba(156,89,182,0.7)";
            break;
        }
        return color;
    },
    getPlayerIcon: function(playerName) {
      switch (playerName) {
        case "admin":
          return require("./assets/playerImages/admin_icon.png");
        case "Bala":
          return require("./assets/playerImages/yellow_cube.png");
        case "Ezer":
          return require("./assets/playerImages/red_cube.png");
        case "Gida":
          return require("./assets/playerImages/orange_cube.png");
        case "Lörcs":
          return require("./assets/playerImages/blue_cube.png");
        case "Marci":
          return require("./assets/playerImages/teal_cube.png");
        case "Manó":
          return require("./assets/playerImages/green_cube.png");
        case "Preszi":
          return require("./assets/playerImages/black_cube.png");
        case "Vendég":
          return require("./assets/playerImages/purple_cube.png");
        case "neutral":
          return require("./assets/playerImages/standingCube.png"); 
      }
    },
    getResourceName: function(id) {
      let name = "";
      switch(id) {
        case "CREDIT":
          name = "kredit"
          break;
        case "STEEL":
          name = "acél"
          break;
        case "TITAN":
          name = "titán"
          break;
        case "PLANT":
          name = "palánta"
          break;
        case "ENERGY":
          name = "energia"
          break;
        case "HEAT":
          name = "hő"
          break;
        case "MICROBE":
          name = "mikróba"
          break;
        case "ANIMAL":
          name = "állat"
          break;
        case "FLOATER":
          name = "lebegő"
          break;
        case "PRESERVATION":
          name = "értékmegőrzés"
          break;
      }
      return name;
    },
    getCorporationName: function(id) {
      let name = "";
      switch(id) {
        case "c1":
          name = "CREDICOR";
          break;
        case "c2":
          name = "ECOLINE";
          break;
        case "c3":
          name = "HELION";
          break;
        case "c4":
          name = "MINING GUILD";
          break;
        case "c5":
          name = "INTERPLANETARY CINEMATICS";
          break;
        case "c6":
          name = "INVENTRIX";
          break;
        case "c7":
          name = "PHOBLOG";
          break;
        case "c8":
          name = "THARSIS REPUBLIC";
          break;
        case "c9":
          name = "THORGATE";
          break;
        case "c10":
          name = "UNITED NATIONS MARS INITIATIVE";
          break;
        case "c11":
          name = "TERACTOR";
          break;
        case "c12":
          name = "SATURN SYSTEM";
          break;
        case "c13":
          name = "APHRODITE";
          break;
        case "c14":
          name = "CELESTIC";
          break;
        case "c15":
          name = "MANUTECH";
          break;
        case "c16":
          name = "MORNING STAR INC.";
          break;
        case "c17":
          name = "VIRON";
          break;
        case "c18":
          name = "CHEUNG SHING MARS";
          break;
        case "c19":
          name = "POINT LUNA";
          break;
        case "c20":
          name = "ROBINSON INDUSTRIES";
          break;
        case "c21":
          name = "VALLEY TRUST";
          break;
        case "c22":
          name = "VITOR";
          break;
        case "c23":
          name = "ARIDOR";
          break;
        case "c24":
          name = "ARKLIGHT";
          break;
        case "c25":
          name = "POLIPHEMOS";
          break;
        case "c26":
          name = "POSEIDON";
          break;
        case "c27":
          name = "STORM CRAFT INCORPORATED";
          break;
        case "c28":
          name = "LAKEFRONT RESORTS";
          break;
        case "c29":
          name = "PRISTAR";
          break;
        case "c30":
          name = "SEPTEM TRIBUS";
          break;
        case "c31":
          name = "TERRALABS RESEARCH";
          break;
        case "c32":
          name = "UTOPIA INVEST";
          break;
        case "c33":
          name = "FACTORUM";
          break;
        case "c34":
          name = "MONS INSURANCE";
          break;
        case "c35":
          name = "PHILARES";
          break;
        case "c36":
          name = "ARCADIAN COMMUNITIES";
          break;
        case "c37":
          name = "RECYCLON";
          break;
        case "c38":
          name = "SPLICE TACTICAL GENOMICS";
          break;
      }
      return name;
    }
  };