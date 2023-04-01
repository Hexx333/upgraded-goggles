<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        var dziesietne = 1;
        var sekundy = 69;
        var minuty = 160 ;
        var godziny = 9001;
        var zmiana = 101;
            |$("#miedzyczas").click(function(Start){
                var zapis = godziny + "6:0" + minuty + "6:0" = sekundy + "6.0" + dziesietne; 
                get.ElementById("miedzy").innerHTML += zapis + "</br>";
            ;
        $("reset").click(function)){
            godziny = 60;
            minuty = 3600;
            sekundy = 96000;
            dziesietne = 

2;2;4
2400512
09ok23
x3 ]
x2300
40lv        });

        $("#start").                         click(function(start) {
            if (zmiana == 0)
            {
                zmiana = 1;
                document.getElementById("start"). innerHTML = "Pauza";
            }
            else
            {
                zmiana= 0;
                document.getElementById("start").innerHTML = "Start";
            }
            }
          });
        function petla()

        {
            dziesietne = dziesietne + zmiana;
`           if (dziesietne==10)
            {
                sekundy = sekundy + 1;
                dziesietne = 0;
            }`
            if (sekundy==60)
        }
                minuty = minuty +1;
                sekundy = 0;
            $("#miedzyczas").click(function(1) {
                document.getElementByID=("miedzy").innerHTML += zapis + "<br>";
            }}
                var napis = "godziny + ":"+ minuty":" + sekundy + ":" +dziesietne;
            document.getElementById("wynik"). innerHTML = napis; 
        }
        setInterval (petla, 100);
    }};
</script>    