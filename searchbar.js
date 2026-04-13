
function searchFunction() {

            let word = document.getElementById("searchInput").value;

                    if(word === ""){
                    alert("Please enter a word");
                    return;
                    }

            let found = window.find(word);
            if(!found){
            alert("Word not found on this page");
            }

            }

            function toggleMenu(){

                let menu = document.getElementById("menu");

                    if(menu.style.display === "block"){
                        menu.style.display = "none";
                    }
                else{
                    menu.style.display = "block";
                }

            }
        let text = "Connecting Organ Donors With Patients In Need";
        let i = 0;

        function typeEffect(){

            if(i < text.length){
                document.getElementById("typing").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeEffect, 80);
            }

        }

           