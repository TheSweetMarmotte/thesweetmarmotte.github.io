            var comment = document.getElementById("stories").children;
                var track = 0;
                
                for (i=0; i<comment.length ; i++) {
                    comment[i].style.display = "none";
                }
                comment[track].style.display = "block";
                
                function allergauche() {
                    if (track == 0) {
                        return;
                    }
                    comment[track].style.display = "none";
                    track--;
                    comment[track].style.display = "block";
                }
                
                function allerdroite() {
                    if (track == comment.length-1) {
                        return;
                    }
                    comment[track].style.display = "none";
                    track++;
                    comment[track].style.display = "block";
                    
                } 
