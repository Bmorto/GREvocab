$(document).ready(function(){


$("#searchButton").click(function(){
          console.log("you clicked the search btn...")
          var word = $("#inputBar").val();
          console.log(word);

          if(word == "abate"){
            console.log("to put an end to; nullify");
            abate();
            };

            if(word == "abjure"){
              console.log("to renounce upon oath; to reject solemnly")
              abjure();
              };

              if(word == "abrogate"){
                console.log("to abolish by authoritative action; annul")
                abrogate();
                };

                if(word == "abstruse"){
                  console.log("difficult to comprehend; obscure")
                  abstruse();
                  };

                  if(word == "acarpous"){
                    console.log("effete; no longer fertile; worn out")
                    acarpous();
                    }; 

                    if(word != "abate" && word != "abjure" && word != "abrogate" && word != "abstruse" && word != "acarpous"){
                      console.log("unfound word");
                      notFound();
                    }



    });
  });
 function abate(){
   $("#theList").prepend("<li>" +"abate: to put an end to; nullify"+ "</li>");
 }
 function abjure(){
  $("#theList").prepend("<li>" +"abjure: to renounce upon oath; to reject solemnly"+ "</li>");
}
function abrogate(){
  $("#theList").prepend("<li>" +"abrogate: to abolish by authoritative action; annul"+ "</li>");
}
function abstruse(){
  $("#theList").prepend("<li>" +"abstruse:difficult to comprehend; obscure"+ "</li>");
}
function acarpous(){
  $("#theList").prepend("<li>" +"acarpous: effect; no longer fertile; worn out"+ "</li>");
}
function notFound(){
  $("#theList").prepend("<li>" + "unfound" + "</li>");
}
