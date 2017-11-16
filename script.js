$(document).ready(function(){
	// begin by hiding everything except the ids listed in the 'initial' variable
	// $(".node").hide();
	// $(".link").hide();
	$(".plus").hide();
	$(".info").hide();
	$("#instructions").show();
	// $(initial).show();

	// when a node gets clicked show info for that node
	// also, hide all other info
	// also, keep node colored blue while viewing info
	// (and make sure nothing else is blue or glowing)
	$(".node").click(function(){
		var id = $(this).attr("id");
		$(lookup[id]).show();
		$(".info:not("+lookup[id]+")").hide();
		$(".viewing_info").removeClass("viewing_info");
		$(this).addClass("viewing_info");
	});

	// when a link gets clicked show info for that link
	// also, hide all other info
	// also, show 'glow' aka dotted line around link
	// (and make sure nothing else is blue or glowing)
	// $(".link").click(function(){
	// 	var id = $(this).attr("id");
	// 	$(lookup[id]).show();
	// 	$(".info:not("+lookup[id]+")").hide();
	// 	$(".viewing_info").removeClass("viewing_info");
	// 	$(this).addClass("viewing_info");
	// });

	// when a plus gets clicked, hide the plus, show plusses for upstream vars, show the upstream links and vars
	$(".plus").click(function(){
		$(this).hide();
		var id = $(this).attr("id");
		$(lookup2[id]).show();
		var upstream_variables = lookup3[id].replace(/#/g, "").replace(/ /g,"");
		var upstream_variables = upstream_variables.split(",");
		for (var i=0; i < upstream_variables.length; i++) {
			if (!$("#"+upstream_variables[i]).is(":visible")) {
				var new_plus = "#plus_" + upstream_variables[i];
				$(new_plus).show();
				$("#"+upstream_variables[i]).show();
			};
		};
	});

	// if "show all" button clicked, show all
	$("#show_all").click(function(){
		$(".node").show();
		$(".link").show();
		$(".plus").hide();
	});
	// if "start over" button clicked, reset viz
	$("#start_over").click(function(){
		$(".node").hide();
		$(".link").hide();
		$(".plus").hide();
		$(".info").hide();
		$(".viewing_info").removeClass("viewing_info");
		$(initial).show();
	});

});

//initial nodes, links, and plusses to display
var initial = "#ice, #ocean_temp, #atmospheric_temp, #sea_level, #ocean_acidity, #oceanic_evaporation_and_precipitation, #link_ocean_sea_level, #link_ice_sea_level, #plus_atmospheric_temp, #plus_ocean_temp, #plus_ice, #plus_ocean_acidity, #plus_oceanic_evaporation_and_precipitation"

//lookup info for clicked node
var lookup = {
	atmospheric_temp : '#info_atm',
	ocean_temp : '#info_ocean',
	ice : '#info_ice',
	FOLU : '#info_FOLU',
	fossil_fuels : '#info_fossil_fuels',
	sea_level : "#info_sea_level",
	aerosols : "#info_aerosols",
	aerosol_black_carbon : "#info_aerosol_black_carbon",
	solar_irradiance : "#info_solar_irradiance",
	radiative_forcing : "#info_radiative_forcing",
	atmospheric_ghg : "#info_atmospheric_ghg",
	emissions : "#info_emissions",
	population_economy_size : "#info_population_economy_size" ,
	ocean_co2 : "#info_ocean_co2" ,
	ocean_acidity : "#info_ocean_acidity" ,
	soil_and_vegetation_co2 : "#info_soil_and_vegetation_co2" ,
	oceanic_evaporation_and_precipitation :"#info_oceanic_evaporation_and_precipitation" ,
};

//lookup upstream links of clicked plus sign
var lookup2 = {
	plus_atmospheric_temp : '#link_radiative_forcing_atmospheric_temp',
	plus_radiative_forcing : "#link_solar_irradiance_radiative_forcing, #link_aerosols_radiative_forcing, #link_aerosol_black_carbon_radiative_forcing, #link_atmospheric_ghg_radiative_forcing",
	plus_ocean_temp : '#link_radiative_forcing_ocean_temp',
	plus_oceanic_evaporation_and_precipitation : "#link_radiative_forcing_oceanic_evaporation_and_precipitation" ,
	plus_ice : '#link_radiative_forcing_ice',
	plus_atmospheric_ghg : "#link_ocean_co2_atmospheric_ghg, #link_soil_and_vegetation_co2_atmospheric_ghg, #link_emissions_atmospheric_ghg",
	plus_ocean_acidity : "#link_ocean_co2_ocean_acidity",
	plus_emissions : "#link_FOLU_emissions, #link_fossil_fuels_emissions",
	plus_fossil_fuels : "#link_population_economy_size_fossil_fuels",
};

//lookup upstream nodes of clicked plus sign
var lookup3 = {
	plus_atmospheric_temp : '#radiative_forcing',
	plus_radiative_forcing : "#solar_irradiance, #aerosols, #aerosol_black_carbon, #atmospheric_ghg",
	plus_ocean_temp : '#radiative_forcing',
	plus_oceanic_evaporation_and_precipitation : "#radiative_forcing" ,
	plus_ice : '#radiative_forcing',
	plus_atmospheric_ghg : "#ocean_co2, #soil_and_vegetation_co2, #emissions",
	plus_ocean_acidity : "#ocean_co2",
	plus_emissions : "#FOLU, #fossil_fuels",
	plus_fossil_fuels : "#population_economy_size",
};