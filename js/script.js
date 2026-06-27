// alert("Hello world"); //TO CHECK IF JAVASCRIPT FILE IS CONNECTED TO HTML

//CREATING A WINDOW ONLOAD FUNCTION
window.onload = pageReady;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************  VIEW 1 *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function pageReady() {

    var dashboardPreviousPage = "";
    var customRooms = [];
    //================================= HOME BUTTON & BACK BUTTON =================================

    //GETTING REFERENCE FOR HOME BUTTON FROM HTML 
    var homeButton = document.getElementById("homeButton");
    var backButton = document.getElementById("backButton");
    function showHomeButton() {
        homeButton.style.display = "block";
    }
    function showBackButton() {
        backButton.style.display = "block";
    }

    function hideHomeButton() {
        homeButton.style.display = "none";
    }
    function hideBackButton() {
        backButton.style.display = "none";
    }

    hideHomeButton();
    hideBackButton();

    function goBack() {

        if (createShootView.style.display === "flex") {

            hideAll();
            homePageView.style.display = "flex";

            hideBackButton();
            hideHomeButton();

        } else if (equipmentView.style.display === "flex") {

            hideAll();
            createShootView.style.display = "flex";

        } else if (roomsView.style.display === "flex") {

            hideAll();
            equipmentView.style.display = "flex";

        } else if (shootSubmissionView.style.display === "flex") {

            hideAll();
            roomsView.style.display = "flex";

        } else if (dashboardView.style.display === "flex") {

            hideAll();

            if (dashboardPreviousPage === "thankyou") {

                shootSubmissionView.style.display = "flex";

            } else if (dashboardPreviousPage === "home") {
                homePageView.style.display = "flex";

                hideBackButton();
                hideHomeButton();
            }

        } else if (emptyDashboardView.style.display === "flex") {

            hideAll();
            homePageView.style.display = "flex";

            hideBackButton();
            hideHomeButton();

        } else if (shootDetailView.style.display === "flex") {

            hideAll();
            dashboardView.style.display = "flex";
        }
    }

    backButton.addEventListener("click", goBack);
    //==================== ALL NEEDED VIEWS ========================
    var homePageView = document.querySelector(".Main-Container");
    var createShootView = document.querySelector(".createShootView");
    var equipmentView = document.querySelector(".equipmentChecklistView");
    var roomsView = document.querySelector(".roomsView");
    var shootSubmissionView = document.querySelector(".Thankyou-Container");
    var emptyDashboardView = document.querySelector(".empty-dashboard");
    var dashboardView = document.querySelector(".dashboardPage");
    var shootDetailView = document.querySelector(".shootDetailView");

    // CREATING A FUNCTION TO HIDE ALL VIEWS
    function hideAll() {
        homePageView.style.display = "none";
        createShootView.style.display = "none";
        equipmentView.style.display = "none";
        roomsView.style.display = "none";
        shootSubmissionView.style.display = "none";
        emptyDashboardView.style.display = "none";
        dashboardView.style.display = "none";
        shootDetailView.style.display = "none";
    }



    //CREATING A FUNCTION FOR HOME PAGE BUTTON
    function homePageButton() {
        hideAll();
        homePageView.style.display = "flex";
        hideHomeButton();
        hideBackButton();

        updatePagination(0); // Reset to start
    }
    //ADDING AN EVENT LISTENER FOR THE HOME PAGE BUTTON BEING CLICKED
    homeButton.addEventListener("click", homePageButton);


    //STORING A REFERENCE TO ALL THE FORMS BY THEIR NAMES
    var clientFormHandle = document.forms.client_form;
    var equipmentFormHandle = document.forms.equipment_form;
    var roomsFormHandle = document.forms.rooms_form;

    //STORING A REFERENCE TO ALL THE FORMS SUBMIT BUTTONS
    var submitClientDetails = document.getElementById("submitShoot");
    var submitEquipmentDetails = document.getElementById("submitEquipment");
    var submitRoomsDetails = document.getElementById("submitRooms");

    // GRABBING THE WHOLE PARENT ELEMENT OF THE ID AS IT WOULD STILL SHOW CHECK BOX FOR ROOM EVEN IF ROOMS WERE HIDDEN
    var frontElevation = document.getElementById("frontelevation").parentElement;
    var mainEntrance = document.getElementById("mainentrance").parentElement;
    var driveway = document.getElementById("driveway").parentElement;
    var garage = document.getElementById("garage").parentElement;
    var patio = document.getElementById("patio").parentElement;
    var backyard = document.getElementById("backyard").parentElement;
    var livingroom = document.getElementById("livingroom").parentElement;
    var kitchen = document.getElementById("kitchen").parentElement;
    var bedrooms = document.getElementById("bedrooms").parentElement;
    var bathrooms = document.getElementById("bathrooms").parentElement;
    var laundry = document.getElementById("laundry").parentElement;
    var balcony = document.getElementById("balcony").parentElement;
    var roofTop = document.getElementById("rooftop").parentElement;
    var lobby = document.getElementById("lobby").parentElement;
    var amenities = document.getElementById("amenities").parentElement;
    var parking = document.getElementById("parking").parentElement;
    var addSpace = document.getElementById("addspace").parentElement;
    //===================== CREATE A SHOOT =========================

    //================================================== REFERENCES TO ALL FORMS ===========================================================
    // GETTING REFERENCE FOR CLIENT FIELDS FROM FORM BY ITS ID
    var equipmentCamera = document.getElementById("camera");
    var equipmentLens = document.getElementById("lens");
    var equipmentTripod = document.getElementById("tripod");
    var equipmentSdCards = document.getElementById("sdcards");
    var equipmentExtraBatteries = document.getElementById("extrabatteries");
    var equipmentCleaningKit = document.getElementById("cleaningkit");
    var equipmentDrone = document.getElementById("drone");
    var equipmentFlash = document.getElementById("flash");
    var equipmentGimbal = document.getElementById("gimbal");
    var equipmentAudioMic = document.getElementById("audio-mic");
    var equipmentLaptop_Ipad = document.getElementById("laptop");
    var equipmentLensFilters = document.getElementById("lensfilters");
    var equipmentAddGadget = document.getElementById("addgadget");
    var equipmentAddGadgetLabel = document.querySelector('label[for="addgadget"]');

    // GETTING REFERENCE FOR CLIENT FIELDS FROM FORM BY ITS ID
    var clientName = document.getElementById("clientName");
    var clientContact = document.getElementById("contact");
    var clientEmail = document.getElementById("email");
    var clientAddress = document.getElementById("address");
    var clientPropertyType = document.getElementById("propertyType");
    var clientDate = document.getElementById("date");
    var clientNotes = document.getElementById("specialNote");
    var clientDrone = document.querySelector('input[name="dronerequired"]');
    var clientFlash = document.querySelector('input[name="flashrequired"]');


    //****************** REFERENCE ***************************************************** */
    var frontElevationBox = document.getElementById("frontelevation");
    var mainEntranceBox = document.getElementById("mainentrance");
    var drivewayBox = document.getElementById("driveway");
    var garageBox = document.getElementById("garage");
    var patioBox = document.getElementById("patio");
    var backyardBox = document.getElementById("backyard");
    var livingroomBox = document.getElementById("livingroom");
    var kitchenBox = document.getElementById("kitchen");
    var bedroomsBox = document.getElementById("bedrooms");
    var bathroomsBox = document.getElementById("bathrooms");
    var laundryBox = document.getElementById("laundry");
    var balconyBox = document.getElementById("balcony");
    var roofTopBox = document.getElementById("rooftop");
    var lobbyBox = document.getElementById("lobby");
    var amenitiesBox = document.getElementById("amenities");
    var parkingBox = document.getElementById("parking");
    var addSpaceBox = document.getElementById("addspace");
    // GRABBING CREATE SHOOT BUTTON BY ITS id FROM HTML
    var createShootButton = document.getElementById("create-a-shoot");

    //ADDING AN EVENT LISTENER FOR CREATE SHOOT WHEN IT IS CLICKED

    //===================== CRATE A SHOOT FUNCTION  =======================
    function loadClientForm(event) {
        //ASSIGNING FUNCTION loadClientForm TO LOAD THE FORM AND HIDE EVERYTHING ELSE
        console.log("Create shoot button clicked!!");

        //CALLING HIDE ALL VIEWS FUNCTION
        hideAll();

        showHomeButton();
        showBackButton();
        //SHOW createShootView ONLY
        createShootView.style.display = "flex"; //USED DISPLAY FLEX BECAUSE IT IS DESIGNED AS A FLEX BOX INSIDE CSS DOING BLOCK CHANGES IT DESIGN.
    }

    //ADDING EVENT LISTENER FOR SHOOT BUTTON
    createShootButton.addEventListener("click", loadClientForm);

    //============================ REMOVE CLASS FUNCTION AS SOON AS INPUT IS THERE =======================
    function removeErrorOnInput(inputElement) {
        inputElement.addEventListener("input", function () {
            if (this.value !== "") {
                this.classList.remove("error");
            }
        });
    }

    // REMOVE CLASS FUNCTION AS SOON AS CHECKBOXES IS CHECKED
    function removeErrorOnCheck(inputElement) {
        inputElement.addEventListener("change", function () {
            if (this.checked) {
                this.classList.remove("error");
            }
        });
    }

    //STORES THE NAME OF THE CUSTOM EQUIPMENT ADDED BY THE USER
    var customGadget = "";

    //=============ADDING DYNAMIC CHECK BOX FOR A NEW CUSTOM EQUIPMENT ==============================
    function addCustomEquipment(name) {
        //GET THE CONTAINER WHERE CUSTOM EQUIPMENT CHECKBOXES WILL BE ADDED
        var container = document.getElementById("customEquipmentContainer");

        //CREATE A LABEL FOR CHECKBOX AND TEXT
        var label = document.createElement("label");
        label.classList.add("box");

        //CREATE TEXT ELEMENT FOR EQUIPMENT NAME
        var text = document.createElement("p");
        text.innerText = name;

        //CREATE CHECKBOX INPUT FOR CUSTOM EQUIPMENT
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        //APPEND TEXT AND CHECKBOX INTO LABEL
        label.appendChild(text);
        label.appendChild(checkbox);

        //ADD NEW CUSTOM EQUIPMENT TO PAGE
        container.appendChild(label);

        //STORE CURRENT CUSTOM EQUIPMENT NAME [IT BECAME VERY COMPLEX SO I TRIED DOING ONLY ADDING ONE CUSTOM GADGET AND NOT AN ARRAY SO HAD TO DO IT THIS WAY. WILL CHANGE WHEN WORKING ON IT LATER ] == ASK PROFESSOR FOR DIRECTION HERE
        customGadget = name;

        //REMOVE ERROR STYLE WHEN USER CHECKS IT
        removeErrorOnCheck(checkbox);
    }

    //GETTING REFERENCE FOR ADD BUTTON FOR CUSTOM EQUIPMENT
    var addGadgetBtn = document.getElementById("addGadgetBtn");

    //ADDING EVENT LISTENER FOR THE BUTTON
    addGadgetBtn.addEventListener("click", function () {
        //CHECKING IF BUTTON IS WORKING
        console.log("button working!!!");

        //ONLY IF INPUT IS EMPTY
        if (equipmentAddGadget.value.trim() !== "") {
            //STORE VALUE IN VARIABLE FOR LATER USE
            customGadget = equipmentAddGadget.value;

            //CREATE NEW CUSTOM EQUIPMENT
            addCustomEquipment(equipmentAddGadget.value);

            // //HIDING INPUT BOX AND BUTTON
            equipmentAddGadget.style.display = "none";
            equipmentAddGadgetLabel.style.display = "none";
            addGadgetBtn.style.display = "none";
        }
    });

    //============================CREATING showDashboard() FUNCTION =================================

    function showDashboard() {

        dashboardPreviousPage = "home";

        //HIDE ALL OTHER VIEWS BEFORE SHOWING DASHBOARD
        hideAll();
        showHomeButton();


        //GET ALL SHOOT CARDS FROM DASHBOARD CONTAINER
        var hasShoots = document.getElementById("detailCards").children;

        //SHOW DASHBOARD IF SHOOTS EXIST, OTHERWISE SHOW EMPTY
        if (hasShoots.length > 0) {
            dashboardView.style.display = "flex";
        } else {
            emptyDashboardView.style.display = "flex";
        }

        //FOR DEBUGGING
        console.log("Show Dashboard Button CLICKED!!!");
    }
    function showDashboardAfterShoot() {
        dashboardPreviousPage = "thankyou";

        showDashboard();
        updatePagination(4); // Summary

    }


    //GETTING REFERENCE TO DASHBOARD BUTTON FROM HOME PAGE VIEW
    var showDashboardHomePage = document.getElementById("go-to-dashboard");

    //================ EVENT LISTENER FOR DASHBOARD BUTTON ======================
    showDashboardHomePage.addEventListener("click", showDashboard);

    //CREATING A CLIENTDATA OBJECTs TO STORE THE DATA FROM THE CLIENT/EQUIPMENT/ROOMS FORM SO WE CAN USE IT LATER.
    var clientData = {};
    var equipmentsUsedData = {};
    var roomsData = {};



    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************  VIEW 2  *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //*****************************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ CLIENT FORM^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^**********************************
    clientFormHandle.onsubmit = processClientForm;
    //================ SUBMIT FUNCTION FOR CLIENT INFORMATION FORM ======================

    function processClientForm(event) {
        //DO NOT LET PAGE RELOAD AS I AM USING ONE PAGE FOR EVERYTHING IN THIS APPLICATION
        event.preventDefault();

        updatePagination(1); // CLIENT


        //=================VALIDATING THE REQUIRED FIELDS FOR THE CLIENT FORM=====================



        //EVENT LISTENER FOR WHENEVER THERE IS AN INPUT INSIDE CLIENT NAME THE CLASS ERROR IS REMOVED.
        removeErrorOnInput(clientName);

        //VALIDATING THE CLIENT NAME FOR THE CLIENT INFORMATION FORM
        if (clientName.value === "") {
            clientName.classList.add("error");
            clientName.focus();
            return false;
        } else {
            clientName.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THERE IS AN INPUT INSIDE CLIENT CONTACT THE CLASS ERROR IS REMOVED.
        removeErrorOnInput(clientContact);


        //VALIDATING THE CLIENT CONTACT FOR THE CLIENT INFORMATION FORM
        var phonePattern = /^[0-9]{10}$/; // REGEX PATTERN FOR 10 DIGITS NUMBER ONLY
        if (phonePattern.test(clientContact.value) === false) {
            clientContact.classList.add("error");
            clientContact.focus();
            return false;
        } else {
            clientContact.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THERE IS AN INPUT INSIDE CLIENT EMAIL THE CLASS ERROR IS REMOVED.
        removeErrorOnInput(clientEmail);


        //VALIDATING THE CLIENT EMAIL FOR THE CLIENT INFORMATION FORM
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // REGEX PATTERN FOR EMAIL
        if (emailPattern.test(clientEmail.value) === false) {
            clientEmail.classList.add("error");
            clientEmail.focus();
            return false;
        } else {
            clientEmail.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THERE IS AN INPUT INSIDE CLIENT ADDRESS THE CLASS ERROR IS REMOVED.
        removeErrorOnInput(clientAddress);

        //VALIDATING THE CLIENT ADDRESS FOR THE CLIENT INFORMATION FORM
        if (clientAddress.value === "") {
            clientAddress.classList.add("error");
            clientAddress.focus();
            return false;
        } else {
            clientAddress.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THERE IS AN INPUT INSIDE CLIENT PROPERTY TYPE THE CLASS ERROR IS REMOVED.
        removeErrorOnInput(clientPropertyType);

        //VALIDATING THE CLIENT PROPERTY TYPE FOR THE CLIENT INFORMATION FORM
        if (clientPropertyType.value === "Property Type") {
            clientPropertyType.classList.add("error");
            clientPropertyType.focus();
            return false;
        } else {
            clientPropertyType.classList.remove("error");
        }

        // MAKING VARIABLES FOR DATE SO THAT WE CAN VALIDATE IT.
        var selectedDate = new Date(clientDate.value + "T00:00:00");
        var todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        //EVENT LISTENER FOR WHENEVER THERE IS AN INPUT INSIDE CLIENT PROPERTY TYPE THE CLASS ERROR IS REMOVED.
        removeErrorOnInput(clientDate);

        //VALIDATING THE CLIENT PROPERTY TYPE FOR THE CLIENT INFORMATION FORM
        if (clientDate.value === "") {
            clientDate.classList.add("error");
            clientDate.focus();
            return false;
        }
        else if (selectedDate < todayDate) {
            clientDate.classList.add("error");
            clientDate.focus();
            return false;
        } else {
            clientDate.classList.remove("error");
        }

        //DATA FROM CLIENT NOTES
        var specialNotesValue = clientNotes.value || "";

        // CHECKBOX DATA FOR DRONE AND CLIENT
        var droneValue = clientDrone.checked;
        var flashValue = clientFlash.checked;

        //FOR THE CLIENT FORM SUBMISSION
        console.log("Client form was submitted!");


        //CREATING A CLIENTDATA OBJECT TO STORE THE DATA FROM THE CLIENT FORM SO WE CAN USE IT LATER.

        clientData.name = clientName.value;
        clientData.contact = clientContact.value;
        clientData.email = clientEmail.value;
        clientData.address = clientAddress.value;
        clientData.propertyType = clientPropertyType.value;
        clientData.shootDate = clientDate.value;
        clientData.notes = clientNotes.value;
        clientData.drone = droneValue;
        clientData.flash = flashValue;

        //DISPLAY CLIENT NAME AND ADDRESS FOR EQUIPMENT AND ROOM FORM
        // document.getElementById("clientNameEForm").innerHTML = clientData.name;
        // document.getElementById("clientNameForm").innerHTML = clientData.name;
        // document.getElementById("clientAddressEForm").innerHTML = clientData.address;
        // document.getElementById("clientAddressForm").innerHTML = clientData.address;



        //SHOW ROOMS BASED ON PROPERTY TYPE

        //IF PROPERTY TYPE IS A HOUSE SHOW DON'T SHOW THESE ROOMS
        if (clientData.propertyType === "house") {
            balcony.style.display = "none";
            roofTop.style.display = "none";
            lobby.style.display = "none";
            amenities.style.display = "none";
            parking.style.display = "none";
        } else {
            balcony.style.display = "flex";
            roofTop.style.display = "flex";
            lobby.style.display = "flex";
            amenities.style.display = "flex";
            parking.style.display = "flex";
        }

        //IF PROPERTY TYPE IS AN APARTMENT DON'T SHOW THESE ROOMS
        if (clientData.propertyType === "apartment") {
            frontElevation.style.display = "none";
            driveway.style.display = "none";
            garage.style.display = "none";
            patio.style.display = "none";
            backyard.style.display = "none";
        } else {
            frontElevation.style.display = "flex";
            driveway.style.display = "flex";
            garage.style.display = "flex";
            patio.style.display = "flex";
            backyard.style.display = "flex";
        }

        //LOGGING THE CLIENT DATA AS AN OBJECT IN CONSOLE
        console.log(clientData);

        //WHEN THE FORM GETS SUBMITTED WE MOVE TO NEXT VIEW
        hideAll();

        //SHOW EQUIPMENT FORM
        equipmentView.style.display = "flex";


        //ONLY SHOWS DRONE AND FLASH OPTION IN EQUIPMENT FORM IF THEY WERE CHECKED IN CLIENT FORM


        if (clientData.drone === false) {
            equipmentDroneLabel.style.display = "none";
        } else {
            equipmentDroneLabel.style.display = "flex";
        }

        if (clientData.flash === false) {
            equipmentFlashLabel.style.display = "none";
        } else {
            equipmentFlashLabel.style.display = "flex";
        }
    }

    var equipmentDroneLabel = document.querySelector('label[for="drone"]');
    var equipmentFlashLabel = document.querySelector('label[for="flash"]');

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************  VIEW 3  *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************EQUIPMENT FORM*********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    equipmentFormHandle.onsubmit = processEquipmentForm;

    //================ SUBMIT FUNCTION FOR EQUIPMENT FORM ======================

    function processEquipmentForm(event) {
        //DO NOT LET PAGE RELOAD AS I AM USING ONE PAGE FOR EVERYTHING IN THIS APPLICATION
        event.preventDefault();
        showHomeButton();
        showBackButton();

        //=================VALIDATING THE REQUIRED FIELDS FOR THE EQUIPMENT FORM=====================




        //EVENT LISTENER FOR WHENEVER THE CAMERA CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentCamera);

        //VALIDATING THE CAMERA IN EQUIPMENT FORM
        if (!equipmentCamera.checked) {
            equipmentCamera.classList.add("error");
            return false;
        } else {
            equipmentCamera.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE LENS CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentLens);

        //VALIDATING THE LENS IN EQUIPMENT FORM
        if (!equipmentLens.checked) {
            equipmentLens.classList.add("error");
            return false;
        } else {
            equipmentLens.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE TRIPOD CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentTripod);

        //VALIDATING THE TRIPOD IN EQUIPMENT FORM
        if (!equipmentTripod.checked) {
            equipmentTripod.classList.add("error");
            return false;
        } else {
            equipmentTripod.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE SD CARDS CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentSdCards);

        //VALIDATING THE SD CARDS IN EQUIPMENT FORM
        if (!equipmentSdCards.checked) {
            equipmentSdCards.classList.add("error");
            return false;
        } else {
            equipmentSdCards.classList.remove("error");
        }


        //VALIDATING THE DRONE IN EQUIPMENT FORM
        //I USED DRONE LABEL TO HIDE AND SHOW IT IN CLIENT FORM SO I USED THIS TO CHECK IF IT IS SHOWING AND THEN VALIDATE IT
        if (equipmentDroneLabel.style.display !== "none" && !equipmentDrone.checked) {
            equipmentDrone.classList.add("error");
            return false;
        } else {
            equipmentDrone.classList.remove("error");
        }

        //VALIDATING THE FLASH IN EQUIPMENT FORM
        //I USED FLASH LABEL TO HIDE AND SHOW IT IN CLIENT FORM SO I USED THIS TO CHECK IF IT IS SHOWING AND THEN VALIDATE IT
        if (equipmentFlashLabel.style.display !== "none" && !equipmentFlash.checked) {
            equipmentFlash.classList.add("error");
            return false;
        } else {
            equipmentFlash.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE GIMBAL CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentGimbal);

        //VALIDATING THE GIMBAL IN EQUIPMENT FORM
        if (!equipmentGimbal.checked) {
            equipmentGimbal.classList.add("error");
            return false;
        } else {
            equipmentGimbal.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE LAPTOP/I-PAD CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentLaptop_Ipad);

        //VALIDATING THE LAPTOP/I-PAD IN EQUIPMENT FORM

        if (!equipmentLaptop_Ipad.checked) {
            equipmentLaptop_Ipad.classList.add("error");
            return false;
        } else {
            equipmentLaptop_Ipad.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE LENS FILTERS CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(equipmentLensFilters);

        //VALIDATING THE LENS FILTERS IN EQUIPMENT FORM

        if (!equipmentLensFilters.checked) {
            equipmentLensFilters.classList.add("error");
            return false;
        } else {
            equipmentLensFilters.classList.remove("error");
        }

        //LOGGING THE SUBMISSION OF EQUIPMENT FORM
        console.log("Equipment Form Has Submitted");


        // VARIABLES FOR DATA FROM THE EQUIPMENT FORM
        var cameraValue = equipmentCamera.checked;
        var lensValue = equipmentLens.checked;
        var tripodValue = equipmentTripod.checked;
        var sdCardsValue = equipmentSdCards.checked;
        var extraBatteriesValue = equipmentExtraBatteries.checked;
        var cleaningKitValue = equipmentCleaningKit.checked;
        var equipmentDroneValue = equipmentDrone.checked;
        var equipmentFlashValue = equipmentFlash.checked;
        var gimbalValue = equipmentGimbal.checked;
        var audioMicValue = equipmentAudioMic.checked;
        var laptopValue = equipmentLaptop_Ipad.checked;
        var lensFiltersValue = equipmentLensFilters.checked;
        var addGadgetValue = equipmentAddGadget.value;

        //PUTTING DATA FROM EQUIPMENT FORM INTO AN OBJECT FOR EQUIPMENT FOR LATER USE
        equipmentsUsedData.camera = cameraValue;
        equipmentsUsedData.lens = lensValue;
        equipmentsUsedData.tripod = tripodValue;
        equipmentsUsedData.sdCards = sdCardsValue;
        equipmentsUsedData.extraBatteries = extraBatteriesValue;
        equipmentsUsedData.cleaningKit = cleaningKitValue;
        equipmentsUsedData.drone = equipmentDroneValue;
        equipmentsUsedData.flash = equipmentFlashValue;
        equipmentsUsedData.gimbal = gimbalValue;
        equipmentsUsedData.audioMic = audioMicValue;
        equipmentsUsedData.laptop_Ipad = laptopValue;
        equipmentsUsedData.lensFilters = lensFiltersValue;
        // var addGadgetValueCustom = equipmentAddGadget.value;
        // equipmentsUsedData.addGadget = addGadgetValueCustom;

        equipmentsUsedData.addGadget = customGadget !== "";
        equipmentsUsedData.addGadgetName = customGadget;
        //ADDING CUSTOM GADGET


        //LOGGING THE EQUIPMENT DATA AS AN OBJECT IN CONSOLE
        console.log(equipmentsUsedData);

        //WHEN THE FORM GETS SUBMITTED WE MOVE TO NEXT VIEW
        hideAll();

        //SHOW ROOMS FORM
        roomsView.style.display = "flex";
        document.getElementById("customRoomContainer").style.display = "block";
        updatePagination(2); // Rooms
    }


    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************  VIEW 4  *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************ROOMS FORM*********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ==========================================CUSTOM ROOM ==============================
    function addCustomRoom(name) {

        var container2 = document.getElementById("customRoomContainer");

        var label = document.createElement("label");
        label.classList.add("roombox");

        var text = document.createElement("p");
        text.innerText = name;

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        label.appendChild(text);
        label.appendChild(checkbox);

        container2.appendChild(label);

        customRooms.push({
            name: name,
            element: checkbox
        });

        checkbox.addEventListener("change", updateProgress);
    }

    var addSpaceBtn = document.getElementById("addSpaceBtn");

    addSpaceBtn.addEventListener("click", function () {


        var input = document.getElementById("addspace");

        console.log("add Space clicked");
        console.log("input element:", input);
        console.log("input value:", input?.value);


        if (input.value.trim() !== "") {
            addCustomRoom(input.value.trim());

            input.value = "";

            updateProgress();
        }
    });



    roomsFormHandle.onsubmit = processRoomsForm;

    //================ SUBMIT FUNCTION FOR EQUIPMENT FORM ======================

    function processRoomsForm(event) {
        //DO NOT LET PAGE RELOAD AS I AM USING ONE PAGE FOR EVERYTHING IN THIS APPLICATION
        event.preventDefault();
        showHomeButton();
        showBackButton();
        updatePagination(3); // rooms

        //=================VALIDATING THE REQUIRED FIELDS FOR THE ROOMS FORM=====================



        //EVENT LISTENER FOR WHENEVER THE FRONT ELEVATION CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(frontElevationBox);

        //VALIDATING THE FRONT ELEVATION IN ROOMS FORM
        if (frontElevation.style.display !== "none" && !frontElevationBox.checked) {
            frontElevationBox.classList.add("error");
            return false;
        } else {
            frontElevationBox.classList.remove("error");
        }

        //EVENT LISTENER FOR WHENEVER THE MAIN ENTRANCE CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(mainEntranceBox);

        //VALIDATING THE MAIN ENTRANCE IN ROOMS FORM
        if (mainEntrance.style.display !== "none" && !mainEntranceBox.checked) {
            mainEntranceBox.classList.add("error");
            return false;
        } else {
            mainEntranceBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE DRIVEWAY CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(drivewayBox);

        //VALIDATING THE DRIVEWAY IN ROOMS FORM
        if (driveway.style.display !== "none" && !drivewayBox.checked) {
            drivewayBox.classList.add("error");
            return false;
        } else {
            drivewayBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE GARAGE CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(garageBox);

        //VALIDATING THE GARAGE IN ROOMS FORM
        if (garage.style.display !== "none" && !garageBox.checked) {
            garageBox.classList.add("error");
            return false;
        } else {
            garageBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE PATIO CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(patioBox);

        //VALIDATING THE PATIO IN ROOMS FORM
        if (patio.style.display !== "none" && !patioBox.checked) {
            patioBox.classList.add("error");
            return false;
        } else {
            patioBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE BACKYARD CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(backyardBox);

        //VALIDATING THE BACKYARD IN ROOMS FORM
        if (backyard.style.display !== "none" && !backyardBox.checked) {
            backyardBox.classList.add("error");
            return false;
        } else {
            backyardBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE LIVING ROOMS CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(livingroomBox);

        //VALIDATING THE LIVING ROOMS IN ROOMS FORM
        if (livingroom.style.display !== "none" && !livingroomBox.checked) {
            livingroomBox.classList.add("error");
            return false;
        } else {
            livingroomBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE KITCHEN CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(kitchen);

        //VALIDATING THE KITCHEN IN ROOMS FORM
        if (kitchen.style.display !== "none" && !kitchenBox.checked) {
            kitchenBox.classList.add("error");
            return false;
        } else {
            kitchenBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE BEDROOMS CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(bedroomsBox);

        //VALIDATING THE BEDROOMS IN ROOMS FORM
        if (bedrooms.style.display !== "none" && !bedroomsBox.checked) {
            bedroomsBox.classList.add("error");
            return false;
        } else {
            bedroomsBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE BATHROOMS CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(bathroomsBox);

        //VALIDATING THE BATHROOMS IN ROOMS FORM
        if (bathrooms.style.display !== "none" && !bathroomsBox.checked) {
            bathroomsBox.classList.add("error");
            return false;
        } else {
            bathroomsBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE LAUNDRY CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(laundryBox);

        //VALIDATING THE LAUNDRY IN ROOMS FORM
        if (laundry.style.display !== "none" && !laundryBox.checked) {
            laundryBox.classList.add("error");
            return false;
        } else {
            laundryBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE BALCONY CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(balconyBox);

        //VALIDATING THE BALCONY IN ROOMS FORM
        if (balcony.style.display !== "none" && !balconyBox.checked) {
            balconyBox.classList.add("error");
            return false;
        } else {
            balconyBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE ROOFTOP CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(roofTopBox);

        //VALIDATING THE ROOFTOP IN ROOMS FORM
        if (roofTop.style.display !== "none" && !roofTopBox.checked) {
            roofTopBox.classList.add("error");
            return false;
        } else {
            roofTopBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE MAIN LOBBY CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(lobbyBox);

        //VALIDATING THE MAIN LOBBY IN ROOMS FORM
        if (lobby.style.display !== "none" && !lobbyBox.checked) {
            lobbyBox.classList.add("error");
            return false;
        } else {
            lobbyBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE AMENITIES CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(amenitiesBox);

        //VALIDATING THE AMENITIES IN ROOMS FORM
        if (amenities.style.display !== "none" && !amenitiesBox.checked) {
            amenitiesBox.classList.add("error");
            return false;
        } else {
            amenitiesBox.classList.remove("error");
        }
        //EVENT LISTENER FOR WHENEVER THE PARKING CHECKBOX IS CHECKED THE CLASS ERROR IS REMOVED.
        removeErrorOnCheck(parkingBox);

        //VALIDATING THE PARKING IN ROOMS FORM
        if (parking.style.display !== "none" && !parkingBox.checked) {
            parkingBox.classList.add("error");
            return false;
        } else {
            parkingBox.classList.remove("error");
        }

        // customRooms.forEach(function (room) {
        //     removeErrorOnCheck(room.element);

        //     if (!room.element.checked) {
        //         room.element.classList.add("error");
        //         room.element.focus();
        //         return false;
        //     } else {
        //         room.element.classList.remove("error");
        //     }
        // });

        // =========================== Validating custom room ==========================
        let customRoomsValid = true;

        for (let i = 0; i < customRooms.length; i++) {
            const room = customRooms[i];

            removeErrorOnCheck(room.element);

            if (!room.element.checked) {
                room.element.classList.add("error");
                customRoomsValid = false;
            } else {
                room.element.classList.remove("error");
            }
        }

        if (!customRoomsValid) {
            return false;
        }

        //LOGGING THE SUBMISSION OF ROOMS FORM
        console.log("ROOMS Form Has Submitted");

        // VARIABLES FOR DATA FROM THE ROOMS FORM
        var frontElevationValue = frontElevationBox.checked;
        var mainEntranceValue = mainEntranceBox.checked;
        var drivewayValue = drivewayBox.checked;
        var garageValue = garageBox.checked;
        var patioValue = patioBox.checked;
        var backyardValue = backyardBox.checked;
        var livingroomValue = livingroomBox.checked;
        var kitchenValue = kitchenBox.checked;
        var bedroomsValue = bedroomsBox.checked;
        var bathroomsValue = bathroomsBox.checked;
        var laundryValue = laundryBox.checked;
        var balconyValue = balconyBox.checked;
        var roofTopValue = roofTopBox.checked;
        var lobbyValue = lobbyBox.checked;
        var amenitiesValue = amenitiesBox.checked;
        var parkingValue = parkingBox.checked;
        var addSpaceValue = addSpaceBox.value;

        //PUTTING DATA INTO OBJECT OF ROOMS FOR LATER USE
        roomsData.frontElevation = frontElevationValue;
        roomsData.mainEntrance = mainEntranceValue;
        roomsData.driveway = drivewayValue;
        roomsData.garage = garageValue;
        roomsData.patio = patioValue;
        roomsData.backyard = backyardValue;
        roomsData.livingroom = livingroomValue;
        roomsData.kitchen = kitchenValue;
        roomsData.bedrooms = bedroomsValue;
        roomsData.bathrooms = bathroomsValue;
        roomsData.laundry = laundryValue;
        roomsData.balcony = balconyValue;
        roomsData.roofTop = roofTopValue;
        roomsData.lobby = lobbyValue;
        roomsData.amenities = amenitiesValue;
        roomsData.parking = parkingValue;
        roomsData.customRooms = customRooms.map(function (room) {
            return {
                name: room.name,
                checked: room.element.checked
            };
        });

        //LOGGING THE ROOMS DATA AS AN OBJECT IN CONSOLE
        console.log(roomsData);

        //COMBINING ALL THE OBJECTS CREATED TO STORE DATA FROM FORMS AND PROGRESS INTO ONE OBJECT
        var shootData = {
            clientData: clientData,
            equipmentsUsedData: equipmentsUsedData,
            roomsData: roomsData,
            progress: currentProgress
        };
        console.log(shootData);

        //ADDING SHOOT DETAILS TO LOCAL STORAGE
        saveCurrentShoot(shootData);

        //CALLING FUNCTION TO ADD SHOOT TO CARD FOR DASHBOARD VIEW
        addShootToDashboard(shootData);

        //WHEN THE FORM GETS SUBMITTED WE MOVE TO NEXT VIEW
        hideAll();

        //SHOW THANKYOU MESSAGE PAGE
        shootSubmissionView.style.display = "flex";

    }

    //================================ PROGRESS BAR ===================================


    //DECLARING THE VARIABLE FOR PROGRESS PERCENTAGE 
    var currentProgress = 0;

    //FUNCTION TO UPDATE THE PROGRESS BAR
    function updateProgress() {
        //VARIABLE FOR TOTAL NUMBER OF ROOMS AS OUR ROOMS DEPEND ON TYPE OF PROPERTY THE
        var total = 0;

        //VARIABLE FOR CHECKED NUMBER OF ROOMS
        var checked = 0;

        //VARIABLE FOR PERCENTAGE OF ROOMS CHECKED PROGRESS
        var percent = 0;

        //GETTING REFERENCE TO THE PROGRESS BAR AND PROGRESS FILL DIV CONTAINER FROM HTML
        var progressFill = document.getElementById("progress-fill");
        var progressBar = document.getElementById("progress-bar");


        //INCREASING THE NUMBER OF ROOMS FOR BOTH TOTAL AND CHECKED
        if (frontElevation.style.display !== "none") total++;
        if (frontElevationBox.checked) checked++;

        if (mainEntrance.style.display !== "none") total++;
        if (mainEntranceBox.checked) checked++;

        if (driveway.style.display !== "none") total++;
        if (drivewayBox.checked) checked++;

        if (garage.style.display !== "none") total++;
        if (garageBox.checked) checked++;

        if (patio.style.display !== "none") total++;
        if (patioBox.checked) checked++;

        if (backyard.style.display !== "none") total++;
        if (backyardBox.checked) checked++;

        if (livingroom.style.display !== "none") total++;
        if (livingroomBox.checked) checked++;

        if (kitchen.style.display !== "none") total++;
        if (kitchenBox.checked) checked++;

        if (bedrooms.style.display !== "none") total++;
        if (bedroomsBox.checked) checked++;

        if (bathrooms.style.display !== "none") total++;
        if (bathroomsBox.checked) checked++;

        if (laundry.style.display !== "none") total++;
        if (laundryBox.checked) checked++;

        if (balcony.style.display !== "none") total++;
        if (balconyBox.checked) checked++;

        if (roofTop.style.display !== "none") total++;
        if (roofTopBox.checked) checked++;

        if (lobby.style.display !== "none") total++;
        if (lobbyBox.checked) checked++;

        if (amenities.style.display !== "none") total++;
        if (amenitiesBox.checked) checked++;

        if (parking.style.display !== "none") total++;
        if (parkingBox.checked) checked++;

        customRooms.forEach(function (room) {
            total++;
            if (room.element.checked) {
                checked++;
            }
        });

        //CALCULATE PERCENTAGE FOR PROGRESS BAR
        if (total > 0) {
            percent = Math.round((checked / total) * 100);
        }



        //UPDATE PROGRESS BAR IN %
        progressFill.style.width = percent + "%";

        //CHANGE COLOR DEPENDING ON PROGRESS OF THE FORM [PERCENTAGE]
        if (percent < 30) {
            progressFill.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        } else if (percent < 70) {
            progressFill.style.backgroundColor = "rgba(255, 255, 0, 0.8)";
        } else if (percent < 100) {
            progressFill.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
        } else {
            progressFill.style.backgroundColor = "rgba(0, 128, 0, 1)";
        }

        //DECLARING VARIABLE AND GETTING VALUE FOR REMAINING ROOMS
        var remaining = total - checked;

        //INSERTING IT INTO HTML
        document.getElementById("roomStats").innerHTML = `Total Rooms: ${total} || Completed: ${checked} || Remaining: ${remaining}`;
        // PUTTING DATA FOR PROGRESS FROM PERCENT IN FUNCTION
        currentProgress = percent;

        //REFERENCE FOR MSG BOX FOR COMPLETION MESSAGE
        var msgBox = document.getElementById("completionMessageRooms");

        //SHOWS THE MESSAGE DEPENDING ON THE FORM CHECKING
        if (currentProgress === 100) {
            msgBox.innerHTML = "All Rooms are Completed!! Ready to submit.";
            msgBox.style.color = "green";
        } else {
            msgBox.innerHTML = "Please complete all rooms before submitting!!";
            msgBox.style.color = "red";
        }
    }

    //EVENT LISTENER FOR ROOMS CHECKBOXES
    frontElevationBox.addEventListener("change", updateProgress);
    mainEntranceBox.addEventListener("change", updateProgress);
    drivewayBox.addEventListener("change", updateProgress);
    garageBox.addEventListener("change", updateProgress);
    patioBox.addEventListener("change", updateProgress);
    backyardBox.addEventListener("change", updateProgress);
    livingroomBox.addEventListener("change", updateProgress);
    kitchenBox.addEventListener("change", updateProgress);
    bedroomsBox.addEventListener("change", updateProgress);
    bathroomsBox.addEventListener("change", updateProgress);
    laundryBox.addEventListener("change", updateProgress);
    balconyBox.addEventListener("change", updateProgress);
    roofTopBox.addEventListener("change", updateProgress);
    lobbyBox.addEventListener("change", updateProgress);
    amenitiesBox.addEventListener("change", updateProgress);
    parkingBox.addEventListener("change", updateProgress);
    //DIDN'T DO LISTENER FOR ADD SPACE CAUSE THAT IS NOT REQUIRED FIELD


    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****  VIEW 5  *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^******THANKYOU MESSAGE*********************************^^^^^^^^^^^^^^^^^^^^^^^^^


    //GETTING REFERENCE TO DASHBOARD BUTTON FROM THANKYOU MESSAGE VIEW
    var showDashboardThankyou = document.getElementById("hero-dashboard");

    //================ ON  FUNCTION FOR DASHBOARD BUTTON ======================
    showDashboardThankyou.addEventListener("click", showDashboardAfterShoot);

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^****  VIEW 6  *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^****CREATE A SHOOT BUTTON FOR EMPTY DASHBOARD**********************^^^^^^^^^^^

    //===================== CREATE A SHOOT FOR EMPTY DASHBOARD =========================

    // GRABBING CREATE SHOOT BUTTON BY ITS id FROM HTML
    var createShootButtonEmptyDashboard = document.getElementById("create-a-shoot-empty");

    //ADDING EVENT LISTENER FOR SHOOT BUTTON
    createShootButtonEmptyDashboard.addEventListener("click", loadClientForm);

    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************  VIEW 7  *********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************CREATE A DASHBOARD*********************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    //GETTING REFERENCE FOR DETAIL CARDS FROM HTML AND PUTTING IT INTO A VARIABLE
    var detailCards = document.getElementById("detailCards");


    //CREATING AN FUNCTION FOR ADDING THE SHOOT TO THE DASHBOARD CARD
    function addShootToDashboard(shoot, index) {

        //card element
        var card = document.createElement("div");

        card.innerHTML += `
        <div class="shoot-card">
        <p>Client: ${shoot.clientData.name}</p>
        <p>Address: ${shoot.clientData.address}</p>
        <p>Property Type: ${shoot.clientData.propertyType}</p>
        <p>Date: ${shoot.clientData.shootDate}</p>
        <p>Notes: ${shoot.clientData.notes || "None"}</p>
        <p>Progress: ${shoot.progress}</p>
        <button class="viewButton">VIEW DETAILS</button>
        <button class="deleteButton">DELETE SHOOT</button>
        </div>
        `;

        //APPEND CARD TO DASHBOARD
        detailCards.appendChild(card);

        //GETTING A REFERENCE FOR VIEW BUTTON FROM THE DASHBOARD CARD AND THEN LATER SETTING AN EVENT LISTENER FOR THAT
        var viewButton = card.querySelector(".viewButton");
        //ON CLICK IT WOULD CALL THIS FUNCTION 
        viewButton.addEventListener("click", function () {
            showShootDetails(shoot);
        });

        var deleteButton = card.querySelector(".deleteButton");
        //DELETE A SHOOT
        deleteButton.addEventListener("click", function () {
            deleteShoot(index, card);
        });
    }

    //ASSIGNING THE FUNCTION FOR THE CLICK FOR THE VIEW BUTTON WHICH WILL SHOW THE DETAILS FOR THE SHOOT
    function showShootDetails(shoot) {
        hideAll();
        showBackButton();
        shootDetailView.style.display = "flex";

        //CREATING A TABLE VIEW FOR THE SHOOT DETAILS FOO DESKTOP
        shootDetailView.innerHTML = `
        
        <h3 class="detailsHeading">SHOOT DETAILS</h3>
        <table class="detailTable">
        <tr>
        <th>CLIENT DETAILS</th>
        <th>EQUIPMENT CHECKLIST</th>
        <th>ROOMS CHECKLIST</th>
        </tr>

        <tr>
        <td>${shoot.clientData.name}</td>
        <td>CAMERA: ${checkCross(shoot.equipmentsUsedData.camera)}</td>
        <td>FRONT ELEVATION: ${checkCross(shoot.roomsData.frontElevation)}</td>
        </tr>

        <tr>
        <td>${shoot.clientData.address}</td>
        <td>LENS: ${checkCross(shoot.equipmentsUsedData.lens)}</td>
        <td>MAIN ENTRANCE: ${checkCross(shoot.roomsData.mainEntrance)}</td>
        </tr>

        <tr>
        <td>${shoot.clientData.propertyType}</td>
        <td>TRIPOD: ${checkCross(shoot.equipmentsUsedData.tripod)}</td>
        <td>DRIVEWAY: ${checkCross(shoot.roomsData.driveway)}</td>
        </tr>
        
        <tr>
        <td>${shoot.clientData.shootDate}</td>
        <td>SD CARDS: ${checkCross(shoot.equipmentsUsedData.sdCards)}</td>
        <td>GARAGE: ${checkCross(shoot.roomsData.garage)}</td>
        </tr>

        <tr>
        <td>Notes: ${shoot.clientData.notes || "None"}</td>
        <td>EXTRA BATTERIES: ${checkCross(shoot.equipmentsUsedData.extraBatteries)}</td>
        <td>PATIO: ${checkCross(shoot.roomsData.patio)}</td>
        </tr>

        <tr>
        <td>${shoot.progress}</td>
        <td>CLEANING KIT: ${checkCross(shoot.equipmentsUsedData.cleaningKit)}</td>
        <td>BACKYARD: ${checkCross(shoot.roomsData.backyard)}</td>
        </tr>

        <tr>
        <td></td>
        <td>DRONE: ${checkCross(shoot.equipmentsUsedData.drone)}</td>
        <td>LIVING ROOM: ${checkCross(shoot.roomsData.livingroom)}</td>
        </tr>

        <tr>
        <td></td>
        <td>FLASH: ${checkCross(shoot.equipmentsUsedData.flash)}</td>
        <td>BEDROOMS: ${checkCross(shoot.roomsData.bedrooms)}</td>
        </tr>

        <tr>
        <td></td>
        <td>GIMBAL: ${checkCross(shoot.equipmentsUsedData.gimbal)}</td>
        <td>BATHROOMS: ${checkCross(shoot.roomsData.bathrooms)}</td>
        </tr>

        <tr>
        <td></td>
        <td>AUDIO MIC: ${checkCross(shoot.equipmentsUsedData.audioMic)}</td>
        <td>LAUNDRY: ${checkCross(shoot.roomsData.laundry)}</td>
        </tr>

        <tr>
        <td></td>
        <td>LAPTOP / I-PAD: ${checkCross(shoot.equipmentsUsedData.laptop_Ipad)}</td>
        <td>BALCONY: ${checkCross(shoot.roomsData.balcony)}</td>
        </tr>

        <tr>
        <td></td>
        <td>LENS FILTERS: ${checkCross(shoot.equipmentsUsedData.lensFilters)}</td>
        <td>ROOFTOP: ${checkCross(shoot.roomsData.roofTop)}</td>
        </tr>

        <tr>
        <td></td>
        <td>${shoot.equipmentsUsedData.addGadgetName || "None"} 
        ${checkCross(shoot.equipmentsUsedData.addGadget)}</td>
        <td>LOBBY: ${checkCross(shoot.roomsData.lobby)}</td>
        </tr>

        <tr>
        <td></td>
        <td></td>
        <td>PARKING: ${checkCross(shoot.roomsData.parking)}</td>
        </tr>
    
       
        <tr>
        <td></td>
        <td></td>
        <td>ADD SPACE: ${checkCross(shoot.roomsData.addSpace)}</td>
        </tr>

        ${(shoot.roomsData.customRooms?.length > 0)
                ? shoot.roomsData.customRooms.map(room => `
        <tr>
        <td></td>
        <td></td>
        <td>${room.name}: ${checkCross(room.checked)}</td>
        </tr>
        `).join("")
                : `
        <tr>
        <td></td>
        <td></td>
        <td>Custom Rooms: None</td>
        </tr>
        `
            }
        </table>`;
    }

    //FUNCTION FOR HAVING GREEN TICKS FOR TRUE OR RED CROSS FOR FALSE.
    function checkCross(value) {

        return `<span class="material-symbols-outlined ${value === true ? "greenTick" : "redCross"}">
        ${value === true ? "check" : "close"}</span>`;

    }

    function saveCurrentShoot(shootData) {

        //GETTING EXISTING SHOOTS FROM LOCAL STORAGE OR CREATING EMPTY ARRAY
        var shoots = JSON.parse(localStorage.getItem("shoots"));

        //ENSURE SHOOTS IS AN ARRAY IF LOCAL STORAGE IS EMPTY IT WILL BECOME AN EMPTY ARRAY
        if (!Array.isArray(shoots)) {
            shoots = [];
        }

        //ADDING THE CURRENT SHOOT 
        shoots.push((shootData));

        //SAVE BACK TO STORAGE
        localStorage.setItem("shoots", JSON.stringify(shoots));

        //FOR DEBUGGING PURPOSES
        console.log("Current shoot saved to localStorage!!");
    }

    //GETTING SHOOTS FROM LOCAL STORAGE ON PAGE LOAD
    function loadDashboardFromLocalStorage() {
        //GET STORED SHOOTS
        var savedShoots = JSON.parse(localStorage.getItem("shoots"));
        console.log("test1");
        console.log(savedShoots);

        //ENSURE SHOOTS IS AN ARRAY IF LOCAL STORAGE IS EMPTY IT WILL BECOME AN EMPTY ARRAY
        if (!Array.isArray(savedShoots)) {
            savedShoots = [];
        }

        //CLEAR DASHBOARD CARDS BEFORE CREATING
        detailCards.innerHTML = "";

        // LOOPING OVER EACH SAVED SHOOT AND ADDING THEM TO DASHBOARD
        savedShoots.forEach(function (shoot, index) {
            //ADD SHOOT TO DASHBOARD
            console.log(shoot);
            console.log(index);
            addShootToDashboard(shoot, index);

        });
    }


    //DELETE SHOOT FUNCTION
    function deleteShoot(index, cardElement) {
        //GET EXISTING SHOOTS
        var shoots = JSON.parse(localStorage.getItem("shoots"));

        //ENSURE IT IS AN ARRAY
        if (!Array.isArray(shoots)) shoots = [];

        //REMOVE THE SHOOT AT GIVEN INDEX
        shoots.splice(index, 1);

        //SAVE BACK TO LOCAL STORAGE
        localStorage.setItem("shoots", JSON.stringify(shoots));

        //REMOVE THE CARD FROM DASHBOARD
        cardElement.remove();

        //IF NO SHOOTS LEFT, SHOW EMPTY DASHBOARD
        if (shoots.length === 0) {
            showDashboard();
        }
    }

    //CALLING THIS FUNCTION TO LOAD SHOOTS FROM LOCAL STORAGE
    loadDashboardFromLocalStorage();
}


// ==============================HELPER TEXT ===================================
// ================= CLIENT HELP =================
var clientInfoIcon = document.getElementById("clientInfoIcon");
var clientHelpText = document.getElementById("clientHelpText");

clientInfoIcon.addEventListener("click", function () {
    clientHelpText.classList.toggle("hidden");
});

// ================= EQUIPMENT HELP =================
var equipmentInfoIcon = document.getElementById("equipmentInfoIcon");
var equipmentHelpText = document.getElementById("equipmentHelpText");

equipmentInfoIcon.addEventListener("click", function () {
    equipmentHelpText.classList.toggle("hidden");
});

// ================= ROOMS HELP =================
var roomsInfoIcon = document.getElementById("roomsInfoIcon");
var roomsHelpText = document.getElementById("roomsHelpText");

roomsInfoIcon.addEventListener("click", function () {
    roomsHelpText.classList.toggle("hidden");
});



// ==============================================================
let currentPage = 0;

const pages = document.querySelectorAll(".page");

function updatePagination(index) {
    pages.forEach((p, i) => {
        p.classList.remove("active");
        p.classList.remove("completed");

        if (i === index) {
            p.classList.add("active");
        } else if (i < index) {
            p.classList.add("completed");
        }
    });

    currentPage = index;
}
