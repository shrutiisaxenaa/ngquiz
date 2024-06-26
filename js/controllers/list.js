(function(){

    angular
    .module("turtleFacts")
    .controller("listCtrl",ListController);

    ListController.$inject = ['quizMetrics'];

    function ListController(quizMetrics){
        var vm = this;
    
        vm.quizMetrics = quizMetrics;
        vm.data= turtlesData;
        vm.activeTurtle={};
        vm.changeActiveTurtle=changeActiveTurtle;
        vm.activateQuiz = activateQuiz;
        vm.search="";
        vm.quizActive = false;
       
        function changeActiveTurtle(index){
            vm.activeTurtle = index;

        }
        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }

    }
    //we will simulate the API request in this application is to simply paste the JSON data we would normally get from a server,
    //straight into our code as a variable. We will then attach that variable as a property on our controller 
    //which will give us access to all of that data inside our HTML.
    var turtlesData = [
        {
          type: "Leatherback Turtle",
          image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
          locations: "All tropical and subtropical oceans",
          size: "Up to 2m, up to 900kg",
          lifespan: "45 years",
          diet: "Carnivore",
          description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
          type: "Hawksbill Sea Turtle",
          image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
          locations: "Tropical Coastal areas around the world",
          size: "Over 1m, 45-68kg",
          lifespan: "30-50 Years",
          diet: "Carnivore",
          description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
          type: "Alligator Snapping Turtle",
          image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
          locations: "Along the Atlantic Coast of USA",
          size: "around 60cm, up to 100kg",
          lifespan: "20-70 years",
          diet: "Carnivore",
          description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
          type: "Kemp's Ridley Sea Turtle",
          image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
          locations: "Coastal areas of the North Atlantic",
          size: "65cm, up to 45kg",
          lifespan: "Around 50 years",
          diet: "Omnivore",
          description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
          type: "Eastern Snake Necked Turtle",
          image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
          locations: "Eastern Australia",
          size: "Up to 30cm",
          lifespan: "25 years",
          diet: "Carnivore",
          description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        }
      ];


})();