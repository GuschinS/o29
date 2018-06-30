				function init_map() {
					var myOptions = {
						zoom: 15,
						center: new google.maps.LatLng(61.247234, 46.641591999999946),
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
					marker = new google.maps.Marker({
						map: map,
						position: new google.maps.LatLng(61.247234, 46.641591999999946)
					});
					infowindow = new google.maps.InfoWindow({
						content: '<strong>ООО "СМАРТГЛОНАСС"</strong><br>Котлас, ул. Невского, д. 18А, оф. 2<br>'
					});
					google.maps.event.addListener(marker, 'click', function () {
						infowindow.open(map, marker);
					});
					infowindow.open(map, marker);
				}
				google.maps.event.addDomListener(window, 'load', init_map);
