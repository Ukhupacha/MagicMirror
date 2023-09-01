/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 80,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "es",
	locale: "es-PE",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Tareas AGP",
			position: "top_left",
			config: {
				maximumEntries: 20,
				calendars: [
					{
						symbol: "star",
						url: "https://calendar.google.com/calendar/ical/es-419.pe%23holiday%40group.v.calendar.google.com/public/basic.ics"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/agpinka.tareas%40gmail.com/private-e0ded0cad1dcb857906b64470558633e/basic.ics"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/gerencia%40agpinka.com/private-4d5005e4520b28d8579bd2fc09a72633/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-OpenWeatherForecast",
			position: "top_right",
			header: "Hoy",
			config: {
				apikey: "7807206a524040d7eff2233cf02bf7cf", //SUPER SECRET
				latitude: -13.51833,
				longitude: -71.978058,
			  	units: "metric",
			  	iconset: "4c",
			  	colored: true,
			  	concise: true,
			  	requestDelay: "2000",
			  	showFeelsLikeTemp: true,
			  	label_days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			  	showCurrentConditions: false,
			  	showSummary: false,
			  	showExtraCurrentConditions: false,
			  	extraCurrentConditions: {
					highLowTemp: true,
					precipitation: true,
					sunrise: true,
					sunset: true,
					wind: true,
					barometricPressure: false,
					humidity: true,
					dewPoint: false,
					uvIndex: true,
					visibility: false
			  	},

			  	forecastLayout: "table",
			  	forecastHeaderText: "",

			  	hourlyForecastTableHeaderText: "Por hora",
			  	showHourlyForecast: true,
			  	showHourlyTableHeaderRow: true,
			  	hourlyForecastInterval: 3,
			  	maxHourliesToShow: 4,
			  	hourlyExtras: {
					precipitation: true,
					wind: true,
					barometricPressure: false,
					humidity: false,
					dewPoint: false,
					uvIndex: false,
					visibility: false
			  	},

			  	dailyForecastTableHeaderText: "Durante la semana",
			  	showDailyForecast: true,
			  	showDailyTableHeaderRow: true,
			  	maxDailiesToShow: 7,
			  	dailyExtras: {
					precipitation: true,
					sunrise: false,
					sunset: false,
					wind: true,
					barometricPressure: false,
					humidity: false,
					dewPoint: false,
					uvIndex: false
			  	},
			}
		},
		{
			module: "newsfeed",
			position: "top_bar",
			config: {
				showDescription: true,

				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "Gestión",
						url: "https://gestion.pe/arcio/rss"
					},
					{
						title:  "Le monde",
						url : "https://www.lemonde.fr/international/rss_full.xml"
					},
					{
						title: "Science",
						url : "https://www.science.org/rss/news_current.xml"
					},
					{
						title: "Aljazeera",
						url: "https://www.aljazeera.com/xml/rss/all.xml"
					}
				],
				updateInterval: 15000,
				animationSpeed: 5000,
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-Senamhi',
			header: "Senamhi",
			position: "top_center",
			config: {
				locationId: "0019" // cusco
			}

		},
		{
			module: 'MMM-Zkteco',
			header: 'Asistencias Zkteco',
			position: 'top_center',
			config: {
				ip: 'zkteco.intranet',
			}
		},
		{
			module: 'MMM-Carousel',
			position: 'bottom_bar',
			config: {
				transitionInterval: 20000,
				ignoreModules: ['clock', 'newsfeed', 'calendar'],
				mode: 'slides',
				slides : [
					['MMM-OpenWeatherForecast', 'MMM-Senamhi'],
					['MMM-Zkteco']
				]

			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
