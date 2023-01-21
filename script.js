//Copyright 2023, WinterMelon14, All rights reserved.
$(document).ready(function(){       
  $("#help-panel").hide();
  

  // Spawn rates input add button
  $("#dino-input-submit").click(function() {

    // Return checks
    let inst = $("#dino-input").val();
    let inst2 = $("#dino-replacement-input").val();
    let obj = $("#dinos").find("option[value='" + inst + "']");
    let obj2 = $("#dinos").find("option[value='" + inst2 + "']");
    let checked = $("#dino-replacement-checkbox").is(":checked");
    if (!(checked)){
    if(!(obj != null && obj.length > 0) || !($("#dino-spawn-max-input").val()) || !($("#dino-spawn-rate-input").val()) ||!($("#dino-spawn-area-input").val())||$("#dino-spawn-area-input").val() === "Select a map!"){ 
      alert("Invalid");  
      return;
    }}
    if (checked){
      if (!(obj2 != null && obj2.length > 0) || !(obj != null && obj.length > 0))
        {
          alert("Invalid");
          return;}
    }
    //Generate .ini text
    const mob_name = $("#dino-input").val();
    const mob_map = $("#dino-spawn-map-input").val();
    const mob_area = $("#dino-spawn-area-input").val();
    const mob_chance = parseFloat($("#dino-spawn-rate-input").val()) / 100;
    const mob_max = parseFloat($("#dino-spawn-max-input").val())/100;
    var zone = null;
    var id = null;
    try{var mob_areatest = mob_area.replace(/\s/g, '');}
    catch{

    }
    if(!checked){
      id = mob_name+"Spawner"+mob_areatest;}
    else{id = mob_name+"Spawner"+$("#dino-replacement-input").val();}
    if($(`#${id}`).length!=0) {
      alert("You have already added this config");
      return;
    }
    // Generate mob map ini text
    switch (mob_map){
      case "Island":  
        switch (mob_area){
        case "Archaeopteryx Container":
          zone = "DinoSpawnEntriesArcha_C";
          break;
        case "Beach":
          zone = "DinoSpawnEntriesBeach_C";
          break;
        case "Queen Bee Container":
          zone = "DinoSpawnEntriesBee_C";
          break;
        case "Herbivore Island":
          zone = "DinoSpawnEntriesDamiensAtoll_C";
          break;
        case "Giga Container":
          zone = "DinoSpawnEntriesGigant_C";
          break;
        case "Grassland":
          zone = "DinoSpawnEntriesGrassland_C";
          break;
        case "Jungle":
          zone = "DinoSpawnEntriesJungle_C";
          break;
        case "Megalania Container":
          zone = "DinoSpawnEntriesMegalania_C";
          break;
        case "Carnivore Island":
          zone = "DinoSpawnEntriesMonsterIsland_C";
          break;
        case "Mountain":
          zone = "DinoSpawnEntriesMountain_C";
          break;
        case "Pelagornis Container":
          zone = "DinoSpawnEntriesPelican_C";
          break;
        case "Penguin Container":
          zone = "DinoSpawnEntriesPenguins_C";
          break;
        case "Quetz Container":
          zone = "DinoSpawnEntriesQuetz_C";
          break;
        case "Redwoods":
          zone = "DinoSpawnEntriesRedwoods_LostIsland_C";
          break;
        case "Snow":
          zone = "DinoSpawnEntriesSnow_C";
          break;
        case "Swamp":
          zone = "DinoSpawnEntriesSwamp_C";
          break;
        case "Thyacoleo Container":
          zone = "DinoSpawnEntriesThy_C";
          break;
        case "Titanosaur Container":
          zone = "DinoSpawnEntriesTitano_C";
          break;
        case "Unicorn Container":
          zone = "DinoSpawnEntriesUnicorn_C";
          break;
        case "Beaver Container":
          zone = "DinoSpawnEntries_Beavers_C";
          break;
        case "Dark Water":
          zone = "DinoSpawnEntries_DarkWaterAngler_C";
          break;
        case "Plesiosaur Container":
          zone = "DinoSpawnEntries_DarkWater_C";
          break;
        case "Lio Container":
          zone = "DinoSpawnEntries_DarkWater_Lio_C";
          break;
        case "Mosasaur Container":
          zone = "DinoSpawnEntries_DarkWater_Mosa_C";
          break;
        case "Plesiosaur-Tuso Container":
          zone = "DinoSpawnEntries_DarkWater_Plesia_C";
          break;
        case "Tuso Container":
          zone = "DinoSpawnEntries_DarkWater_Tuso_C";
          break;
        case "Deep Water":
          zone = "DinoSpawnEntries_DeepWater_C";
          break;
        case "Inland Water":
          zone = "DinoSpawnEntries_InlandWater_C";
          break;
        case "Ocean":
          zone = "DinoSpawnEntries_Ocean_C";
          break;
        case "Redwood Water":
          zone = "DinoSpawnEntries_RedwoodWater_C";
          break;
        case "Shallow Water":
          zone = "DinoSpawnEntries_ShallowWater_C";
          break;
        case "Swamp Water":
          zone = "DinoSpawnEntries_SwampWater_C";
      }
    }

    // Generate mob name ini text
    const mob_list=    ['Achatina_Character_BP_C','Acrocanthosaurus_Character_BP_C',' Allo_Character_BP_C',' Ammonite_Character_C',' Andrewsarchus_Character_BP_C',' Angler_Character_BP_C',' Ankylo_Character_BP_C',' SpiderS_Character_BP_C',' Archa_Character_BP_C',' Argent_Character_BP_C',' Arthro_Character_BP_C',' SpaceWhale_Character_BP_C',' SpaceDolphin_Character_BP_C',' EndDrone_Character_BP_C',' Cow_Character_BP_C',' Baryonyx_Character_BP_C',' Basilisk_Character_BP_C',' Basilosaurus_Character_BP_C',' BogSpider_Character_BP_C',' Sauropod_Character_BP_C',' LanternPug_Character_BP_C',' Turtle_Character_BP_C',' Carcha_Character_BP_C',' Carno_Character_BP_C',' Beaver_Character_BP_C',' Chalico_Character_BP_C',' Cnidaria_Character_BP_C',' Coel_Character_BP_C',' Compy_Character_BP_C',' CrystalWyvern_Character_BP_C',' Daeodon_Character_BP_C',' Deathworm_Character_BP_C',' EndTank_Character_BP_C',' Deinonychus_Character_BP_C',' Desmodus_Character_BP_C',' Dilo_Character_BP_C',' Dimetro_Character_BP_C',' Dimorph_Character_BP_C',' Diplocaulus_Character_BP_C',' Diplodocus_Character_BP_C',' Direbear_Character_BP_C',' Direwolf_Character_BP_C',' Dodo_Character_BP_C',' Doed_Character_BP_C',' DungBeetle_Character_BP_C',' Dunkle_Character_BP_C',' EelBoss_Character_BP_C',' Eel_Character_BP_C',' Equus_Character_BP_C',' Euryp_Character_C',' LanternBird_Character_BP_C',' Shapeshifter_Small_Character_BP_C',' Fjordhawk_Character_BP_C',' Gacha_Character_BP_C',' Galli_Character_BP_C',' GasBags_Character_BP_C',' Bee_Character_BP_C',' Bee_Queen_Character_BP_C',' Gigant_Character_BP_C',' Bigfoot_Character_BP_C',' Lightbug_Character_BaseBP_C',' LanternLizard_Character_BP_C',' Griffin_Character_BP_C',' Hesperornis_Character_BP_C',' Hyaenodon_Character_BP_C',' IceGolem_Character_BP_C',' IceKaiju_Character_BP_C',' Ragnarok_Wyvern_Override_Ice_C',' Ichthyornis_Character_BP_C',' Dolphin_Character_BP_C',' Iguanodon_Character_BP_C',' InsectSwarmChar_BP_C',' Jerboa_Character_BP_C',' Jugbug_Character_BaseBP_C',' Kairuku_Character_BP_C',' Kaprosuchus_Character_BP_C',' Crab_Character_BP_C',' Kentro_Character_BP_C',' Lamprey_Character_C',' Leech_Character_C',' Leedsichthys_Character_BP_C',' Liopleurodon_Character_BP_C',' Moth_Character_BP_C',' Lystro_Character_BP_C',' Macrophage_Swarm_Character_C',' MilkGlider_Character_BP_C',' Cherufe_Character_BP_C',' Mammoth_Character_BP_C',' IceJumper_Character_BP_C',' Manta_Character_BP_C',' Manticore_Character_BP_C',' Mantis_Character_BP_C',' Megacerops_Character_BP_C',' GiantTurtle_Character_BP_C',' Megalania_Character_BP_C',' Stag_Character_BP_C',' Megalodon_Character_BP_C',' Megalosaurus_Character_BP_C',' Dragonfly_Character_BP_C',' Megatherium_Character_BP_C',' Monkey_Character_BP_C',' Microraptor_Character_BP_C',' camelsaurus_Character_BP_C',' Mosa_Character_BP_C',' Moschops_Character_BP_C',' ChupaCabra_Character_BP_C',' BrainSlug_Character_BP_C',' Bat_Character_BP_C',' Otter_Character_BP_C',' Oviraptor_Character_BP_C',' Sheep_Character_BP_C',' Pachy_Character_BP_C',' Pachyrhino_Character_BP_C',' Paracer_Character_BP_C',' Para_Character_BP_C',' Pegomastax_Character_BP_C',' Pela_Character_BP_C',' Phiomia_Character_BP_C',' Phoenix_Character_BP_C',' Piranha_Character_BP_C',' Plesiosaur_Character_BP_C',' Procoptodon_Character_BP_C',' Ptero_Character_BP_C',' Scorpion_Character_BP_C',' Purlovia_Character_BP_C',' Quetz_Character_BP_C',' Raptor_Character_BP_C',' CaveWolf_Character_BP_C',' Xenomorph_Character_BP_Male_C',' Rex_Character_BP_C',' RockDrake_Character_BP_C',' RockGolem_Character_BP_C',' MoleRat_Character_BP_C',' Saber_Character_BP_C',' Salmon_Character_BP_C',' Sarco_Character_BP_C',' Scout_Character_BP_C',' Pteroteuthis_Char_BP_C',' LionfishLion_Character_BP_C',' LanternGoat_Character_BP_C',' Owl_Character_BP_C',' Spino_Character_BP_C',' Stego_Character_BP_C',' Styracho_Character_BP_C',' Summoner_Character_BP_C',' Tapejara_Character_BP_C',' TekStrider_Character_BP_C',' TerrorBird_Character_BP_C',' Therizino_Character_BP_C',' SpineyLizard_Character_BP_C',' Thylacoleo_Character_BP_C',' BoaFrill_Character_BP_C',' Ant_Character_BP_C',' Titanosaur_Character_BP_C',' Trike_Character_BP_C',' Trilobite_Character_C',' Troodon_Character_BP_C',' Tropeognathus_Character_BP_C',' Tusoteuthis_Character_BP_C',' Spindles_Character_BP_C',' Vulture_Character_BP_C',' Rhino_Character_BP_C',' Yutyrannus_Character_BP_C','Wyvern_Character_BP_Base_C'];
    const mob_to_replace = mob_list[$(`option[value="${$("#dino-replacement-input").val()}"]`).index()];
    let mob = mob_list[$(`option[value="${mob_name}"]`).index()];
    let text = null;
    if(!checked){text = `<span id="${id}" class="mob-ini-output">ConfigAddNPCSpawnEntriesContainer=(NPCSpawnEntriesContainerClassString="${zone}",NPCSpawnEntries=((AnEntryName="${id}",EntryWeight=${mob_chance},NPCsToSpawnStrings=("${mob}"))), NPCSpawnLimits=((NPCClassString="${mob}",MaxPercentageOfDesiredNumToAllow=${mob_max})))<br></span>`;}
    else{
      text = `<span id="${id}" class="mob-ini-output"> NPCReplacements=(FromClassName="${mob_to_replace}",ToClassName="${mob}")<br></span>`;}
    $(text).appendTo("#command-output").css({"color":"black","font-family":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","font-size":"0.99vw"});
    if (!checked){
    $(`<div>Add ${mob_name} to ${mob_area} with a ${mob_chance*100}% chance to spawn and can occupy at most ${mob_max*100}% of the total population</div>`).appendTo("#mob-output-menu").css({"color":"#635f5f","font-family":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"});
    }
    else{
      $(`<div>Replace ${$("#dino-replacement-input").val()} with ${mob_name}</div>`).appendTo("#mob-output-menu").css({"color":"#635f5f","font-family":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"});
    }
    
  });
  
  // Spawn rates spawn area options initializer
  $('#dino-spawn-map-input').change(function () {
    switch ($('#dino-spawn-map-input').val()){
      case "Island":
        $('#dino-spawn-area-input').empty()
        let text = "<option disabled selected value> -- Select an Area/Container -- </option><option value=\"Archaeopteryx Container\">Archaeopteryx Container</option><option value=\"Beach\">Beach</option><option value=\"Queen Bee Container\">Queen Bee Container</option><option value=\"Herbivore Island\">Herbivore Island</option><option value=\"Giga Container\">Giga Container</option><option value=\"Grassland\">Grassland</option><option value=\"Jungle\">Jungle</option><option value=\"Megalania Container\">Megalania Container</option><option value=\"Carnivore Island\">Carnivore Island</option><option value=\"Mountain\">Mountain</option><option value=\"Pelagornis Container\">Pelagornis Container</option><option value=\"Penguin Container\">Penguin Container</option><option value=\"Quetz Container\">Quetz Container</option><option value=\"Redwoods\">Redwoods</option><option value=\"Snow\">Snow</option><option value=\"Swamp\">Swamp</option><option value=\"Thyacoleo Container\">Thyacoleo Container</option><option value=\"Titanosaur Container\">Titanosaur Container</option><option value=\"Unicorn Container\">Unicorn Container</option><option value=\"Beaver Container\">Beaver Container</option><option value=\"Dark Water\">Dark Water</option><option value=\"Plesiosaur Container\">Plesiosaur Container</option><option value=\"Lio Container\">Lio Container</option><option value=\"Mosasaur Container\">Mosasaur Container</option><option value=\"Plesiosaur-Tuso Container\">Plesiosaur-Tuso Container</option><option value=\"Tuso Container\">Tuso Container</option><option value=\"Deep Water\">Deep Water</option><option value=\"Inland Water\">Inland Water</option><option value=\"Ocean\">Ocean</option><option value=\"Redwood Water\">Redwood Water</option><option value=\"Shallow Water\">Shallow Water</option><option value=\"Swamp Water\">Swamp Water</option>";
    $('#dino-spawn-area-input').append(text)
    }
  });
  
  // Spawn rates input replace checkmark button
  $('#dino-replacement-checkbox').change(function () {
    $('#dino-replacement-input').prop('disabled', !this.checked);
    $("#dino-replacement-input").val('');
    $('#dino-spawn-rate-input').prop('disabled', this.checked);
    $("#dino-spawn-rate-input").val('');
    $('#dino-spawn-max-input').prop('disabled', this.checked);
    $("#dino-spawn-max-input").val('');
    $('#dino-spawn-map-input').prop('disabled', this.checked);
    $("#dino-spawn-map-input").val('');
    $('#dino-spawn-area-input').prop('disabled', this.checked);
    $("#dino-spawn-area-input").val('');
  });
  
  // Spawn rates output remove button
  $("#mob-output-menu").on({
    click: function(){
      let index = $(this).index();
      index += 1;
      $("#command-output span")[index].remove();
      
      $(this).remove();
    },
    mouseenter: function () {
        $(this).css("color","red");
        $(this).css("cursor","pointer");
    },
    mouseleave: function () {
        $(this).css("color","#635f5f");
    }
  }, "div"); 

  // Show/hide help panel
  $("#navbar").on({
    click: function(){
      if ($(this).data("on") === false){
        $("#help-panel").fadeIn();
        $("#help-panel").find("*").prop("disabled",false)
        $('#spawn-interface').find('*').prop('disabled',true);
        $('#navbar').find('*').prop('disabled',true);
      }
    }}, "img");
  
  $("#help-panel").on({
    click: function(){
      $("#help-panel").fadeOut();
      $("#help-panel").find("*").prop("disabled",false)
      $('#spawn-interface').find('*').prop('disabled',false);
      $('#navbar').find('*').prop('disabled',false);        
    }
  }, "button");
      
  
});
