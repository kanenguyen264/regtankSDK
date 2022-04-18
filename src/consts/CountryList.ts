interface CountryItem {
  name: string;
  code: string;
  demonym: string;
}

const CountryList: CountryItem[] = [
  {
    name: "Afghanistan",
    code: "AF",
    demonym: "Afghan",
  },
  {
    name: "Albania",
    code: "AL",
    demonym: "Albanian",
  },
  {
    name: "Algeria",
    code: "DZ",
    demonym: "Algerian",
  },
  {
    name: "American Samoa",
    code: "AS",
    demonym: "American Samoan",
  },
  {
    name: "Andorra",
    code: "AD",
    demonym: "Andorran",
  },
  {
    name: "Angola",
    code: "AO",
    demonym: "Angolan",
  },
  {
    name: "Anguilla",
    code: "AI",
    demonym: "Anguillan",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    demonym: "Antiguan",
  },
  {
    name: "Argentina",
    code: "AR",
    demonym: "Argentinean",
  },
  {
    name: "Armenia",
    code: "AM",
    demonym: "Armenian",
  },
  {
    name: "Aruba",
    code: "AW",
    demonym: "Aruban",
  },
  {
    name: "Australia",
    code: "AU",
    demonym: "Australian",
  },
  {
    name: "Austria",
    code: "AT",
    demonym: "Austrian",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    demonym: "Azerbaijani",
  },
  {
    name: "Bahamas, The",
    code: "BS",
    demonym: "Bahamian",
  },
  {
    name: "Bahrain",
    code: "BH",
    demonym: "Bahraini",
  },
  {
    name: "Bangladesh",
    code: "BD",
    demonym: "Bangladeshi",
  },
  {
    name: "Barbados",
    code: "BB",
    demonym: "Barbadian",
  },
  {
    name: "Belarus",
    code: "BY",
    demonym: "Belarusian",
  },
  {
    name: "Belgium",
    code: "BE",
    demonym: "Belgian",
  },
  {
    name: "Belize",
    code: "BZ",
    demonym: "Belizean",
  },
  {
    name: "Benin",
    code: "BJ",
    demonym: "Beninese",
  },
  {
    name: "Bermuda",
    code: "BM",
    demonym: "Bermudan",
  },
  {
    name: "Bhutan",
    code: "BT",
    demonym: "Bhutanese",
  },
  {
    name: "Bolivia",
    code: "BO",
    demonym: "Bolivian",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    demonym: "Bosnian",
  },
  {
    name: "Botswana",
    code: "BW",
    demonym: "Motswana",
  },
  {
    name: "Brazil",
    code: "BR",
    demonym: "Brazilian",
  },
  {
    name: "British Virgin Islands",
    code: "VG",
    demonym: "British Virgin Islander",
  },
  {
    name: "Brunei",
    code: "BN",
    demonym: "Bruneian",
  },
  {
    name: "Bulgaria",
    code: "BG",
    demonym: "Bulgarian",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    demonym: "Burkinabe",
  },
  {
    name: "Burma",
    code: "BU",
    demonym: "Burmese",
  },
  {
    name: "Burundi",
    code: "BI",
    demonym: "Burundian",
  },
  {
    name: "Cambodia",
    code: "KH",
    demonym: "Cambodian",
  },
  {
    name: "Cameroon",
    code: "CM",
    demonym: "Cameroonian",
  },
  {
    name: "Canada",
    code: "CA",
    demonym: "Canadian",
  },
  {
    name: "Cape Verde",
    code: "CV",
    demonym: "Cape Verdean",
  },
  {
    name: "Cayman Islands, The",
    code: "KY",
    demonym: "Caymanian",
  },
  {
    name: "Central African Republic",
    code: "CF",
    demonym: "Central African",
  },
  {
    name: "Chad",
    code: "TD",
    demonym: "Chadian",
  },
  {
    name: "Chile",
    code: "CL",
    demonym: "Chilean",
  },
  {
    name: "China",
    code: "CN",
    demonym: "Chinese (China)",
  },
  {
    name: "Colombia",
    code: "CO",
    demonym: "Colombian",
  },
  {
    name: "Comoros",
    code: "KM",
    demonym: "Comoran",
  },
  {
    name: "Congo, Democratic Republic of the",
    code: "CD",
    demonym: "Congolese (Congo, Democratic Republic of the)",
  },
  {
    name: "Congo, Republic of the",
    code: "CG",
    demonym: "Congolese (Congo, Republic of the)",
  },
  {
    name: "Cook Islands",
    code: "CK",
    demonym: "Cook Islander",
  },
  {
    name: "Costa Rica",
    code: "CR",
    demonym: "Costa Rican",
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    demonym: "Ivoirian",
  },
  {
    name: "Croatia",
    code: "HR",
    demonym: "Croatian",
  },
  {
    name: "Cuba",
    code: "CU",
    demonym: "Cuban",
  },
  {
    name: "Cyprus",
    code: "CY",
    demonym: "Cypriot",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    demonym: "Czech",
  },
  {
    name: "Denmark",
    code: "DK",
    demonym: "Dane",
  },
  {
    name: "Djibouti",
    code: "DJ",
    demonym: "Djiboutian",
  },
  {
    name: "Dominica",
    code: "DM",
    demonym: "Dominican (Dominica)",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    demonym: "Dominican (Dominican Republic)",
  },
  {
    name: "East Timor",
    code: "TL",
    demonym: "Timorese",
  },
  {
    name: "Ecuador",
    code: "EC",
    demonym: "Ecuadorian",
  },
  {
    name: "Egypt",
    code: "EG",
    demonym: "Egyptian",
  },
  {
    name: "El Salvador",
    code: "SV",
    demonym: "Salvadoran",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    demonym: "Equatorial Guinean",
  },
  {
    name: "Eritrea",
    code: "ER",
    demonym: "Eritrean",
  },
  {
    name: "Estonia",
    code: "EE",
    demonym: "Estonian",
  },
  {
    name: "Ethiopia",
    code: "ET",
    demonym: "Ethiopian",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    demonym: "Faroese",
  },
  {
    name: "Fiji",
    code: "FJ",
    demonym: "Fijian",
  },
  {
    name: "Finland",
    code: "FI",
    demonym: "Finnish",
  },
  {
    name: "France",
    code: "FR",
    demonym: "French",
  },
  {
    name: "French Guiana",
    code: "GF",
    demonym: "French Guianese",
  },
  {
    name: "French Polynesia",
    code: "PF",
    demonym: "French Polynesian",
  },
  {
    name: "Gabon",
    code: "GA",
    demonym: "Gabonese",
  },
  {
    name: "Gambia, The",
    code: "GM",
    demonym: "Gambian",
  },
  {
    name: "Georgia",
    code: "GE",
    demonym: "Georgian",
  },
  {
    name: "Germany",
    code: "DE",
    demonym: "German",
  },
  {
    name: "Ghana",
    code: "GH",
    demonym: "Ghanaian",
  },
  {
    name: "Gibraltar",
    code: "GI",
    demonym: "Gibraltarian",
  },
  {
    name: "Greece",
    code: "GR",
    demonym: "Greek",
  },
  {
    name: "Greenland",
    code: "GL",
    demonym: "Greenlandic",
  },
  {
    name: "Grenada",
    code: "GD",
    demonym: "Grenadian",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    demonym: "Guadeloupian",
  },
  {
    name: "Guam",
    code: "GU",
    demonym: "Guamanian",
  },
  {
    name: "Guatemala",
    code: "GT",
    demonym: "Guatemalan",
  },
  {
    name: "Guernsey",
    code: "GG",
    demonym: "Channel Islander",
  },
  {
    name: "Guinea",
    code: "GN",
    demonym: "Guinean (Guinea)",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    demonym: "Guinean (Guinea-Bissau)",
  },
  {
    name: "Guyana",
    code: "GY",
    demonym: "Guyanese",
  },
  {
    name: "Haiti",
    code: "HT",
    demonym: "Haitian",
  },
  {
    name: "Holy See",
    code: "VA",
    demonym: "Holy See",
  },
  {
    name: "Honduras",
    code: "HN",
    demonym: "Honduran",
  },
  {
    name: "Hong Kong",
    code: "HK",
    demonym: "Chinese (Hong Kong)",
  },
  {
    name: "Hungary",
    code: "HU",
    demonym: "Hungarian",
  },
  {
    name: "Iceland",
    code: "IS",
    demonym: "Icelandic",
  },
  {
    name: "India",
    code: "IN",
    demonym: "Indian",
  },
  {
    name: "Indonesia",
    code: "ID",
    demonym: "Indonesian",
  },
  {
    name: "Iran",
    code: "IR",
    demonym: "Iranian",
  },
  {
    name: "Iraq",
    code: "IQ",
    demonym: "Iraqi",
  },
  {
    name: "Ireland",
    code: "IE",
    demonym: "Irish",
  },
  {
    name: "Isle of Man",
    code: "IM",
    demonym: "Manx",
  },
  {
    name: "Israel",
    code: "IL",
    demonym: "Israeli",
  },
  {
    name: "Italy",
    code: "IT",
    demonym: "Italian",
  },
  {
    name: "Jamaica",
    code: "JM",
    demonym: "Jamaican",
  },
  {
    name: "Japan",
    code: "JP",
    demonym: "Japanese",
  },
  {
    name: "Jersey",
    code: "JE",
    demonym: "Jersey",
  },
  {
    name: "Jordan",
    code: "JO",
    demonym: "Jordanian",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    demonym: "Kazakhstani",
  },
  {
    name: "Kenya",
    code: "KE",
    demonym: "Kenyan",
  },
  {
    name: "Kiribati",
    code: "KI",
    demonym: "I-Kiribati",
  },
  {
    name: "Korea, North",
    code: "KP",
    demonym: "North Korea",
  },
  {
    name: "Korea, South",
    code: "KR",
    demonym: "South Korea",
  },
  {
    name: "Kosovo",
    code: "XK",
    demonym: "Kosovan",
  },
  {
    name: "Kuwait",
    code: "KW",
    demonym: "Kuwaiti",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    demonym: "Kyrgyzstani",
  },
  {
    name: "Laos",
    code: "LA",
    demonym: "Laotian",
  },
  {
    name: "Latvia",
    code: "LV",
    demonym: "Latvian",
  },
  {
    name: "Lebanon",
    code: "LB",
    demonym: "Lebanese",
  },
  {
    name: "Lesotho",
    code: "LS",
    demonym: "Basotho",
  },
  {
    name: "Liberia",
    code: "LR",
    demonym: "Liberian",
  },
  {
    name: "Libya",
    code: "LY",
    demonym: "Libyan",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    demonym: "Liechtensteiner",
  },
  {
    name: "Lithuania",
    code: "LT",
    demonym: "Lithuanian",
  },
  {
    name: "Luxembourg",
    code: "LU",
    demonym: "Luxembourger",
  },
  {
    name: "Macau",
    code: "MO",
    demonym: "Chinese (Macau)",
  },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    code: "MK",
    demonym: "Macedonian",
  },
  {
    name: "Madagascar",
    code: "MG",
    demonym: "Malagasy",
  },
  {
    name: "Malawi",
    code: "MW",
    demonym: "Malawian",
  },
  {
    name: "Malaysia",
    code: "MY",
    demonym: "Malaysian",
  },
  {
    name: "Maldives",
    code: "MV",
    demonym: "Maldivan",
  },
  {
    name: "Mali",
    code: "ML",
    demonym: "Malian",
  },
  {
    name: "Malta",
    code: "MT",
    demonym: "Maltese",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    demonym: "Marshallese",
  },
  {
    name: "Martinique",
    code: "MQ",
    demonym: "Martiniquais",
  },
  {
    name: "Mauritania",
    code: "MR",
    demonym: "Mauritanian",
  },
  {
    name: "Mauritius",
    code: "MU",
    demonym: "Mauritian",
  },
  {
    name: "Mayotte",
    code: "YT",
    demonym: "Mayotte",
  },
  {
    name: "Mexico",
    code: "MX",
    demonym: "Mexican",
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM",
    demonym: "Micronesian",
  },
  {
    name: "Moldova",
    code: "MD",
    demonym: "Moldovan",
  },
  {
    name: "Monaco",
    code: "MC",
    demonym: "Monacan",
  },
  {
    name: "Mongolia",
    code: "MN",
    demonym: "Mongolian",
  },
  {
    name: "Montenegro",
    code: "ME",
    demonym: "Montenegrin",
  },
  {
    name: "Montserrat",
    code: "MS",
    demonym: "Montserratian",
  },
  {
    name: "Morocco",
    code: "MA",
    demonym: "Moroccan",
  },
  {
    name: "Mozambique",
    code: "MZ",
    demonym: "Mozambican",
  },
  {
    name: "Myanmar",
    code: "MM",
    demonym: "Myanmarese",
  },
  {
    name: "Namibia",
    code: "NA",
    demonym: "Namibian",
  },
  {
    name: "Nauru",
    code: "NR",
    demonym: "Nauruan",
  },
  {
    name: "Nepal",
    code: "NP",
    demonym: "Nepalese",
  },
  {
    name: "Netherlands",
    code: "NL",
    demonym: "Dutch",
  },
  {
    name: "Netherlands Antilles",
    code: "AN",
    demonym: "Dutch Antillean",
  },
  {
    name: "New Caledonia",
    code: "NC",
    demonym: "New Calcedonia",
  },
  {
    name: "New Zealand",
    code: "NZ",
    demonym: "New Zealander",
  },
  {
    name: "Nicaragua",
    code: "NI",
    demonym: "Nicaraguan",
  },
  {
    name: "Niger",
    code: "NE",
    demonym: "Nigerien",
  },
  {
    name: "Nigeria",
    code: "NG",
    demonym: "Nigerian",
  },
  {
    name: "Niue",
    code: "NU",
    demonym: "Niuean",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    demonym: "Norfolk Islander",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    demonym: "Northern Mariana Islands",
  },
  {
    name: "Norway",
    code: "NO",
    demonym: "Norwegian",
  },
  {
    name: "Oman",
    code: "OM",
    demonym: "Omani",
  },
  {
    name: "Pakistan",
    code: "PK",
    demonym: "Pakistani",
  },
  {
    name: "Palau",
    code: "PW",
    demonym: "Palauan",
  },
  {
    name: "Palestine",
    code: "PS",
    demonym: "Palestinian",
  },
  {
    name: "Panama",
    code: "PA",
    demonym: "Panamanian",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    demonym: "Papua New Guinean",
  },
  {
    name: "Paraguay",
    code: "PY",
    demonym: "Paraguayan",
  },
  {
    name: "Peru",
    code: "PE",
    demonym: "Peruvian",
  },
  {
    name: "Philippines",
    code: "PH",
    demonym: "Filipino",
  },
  {
    name: "Poland",
    code: "PL",
    demonym: "Polish",
  },
  {
    name: "Portugal",
    code: "PT",
    demonym: "Portuguese",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    demonym: "Puerto Rican",
  },
  {
    name: "Qatar",
    code: "QA",
    demonym: "Qatari",
  },
  {
    name: "Reunion",
    code: "RE",
    demonym: "Reunion",
  },
  {
    name: "Romania",
    code: "RO",
    demonym: "Romanian",
  },
  {
    name: "Russia",
    code: "RU",
    demonym: "Russian",
  },
  {
    name: "Rwanda",
    code: "RW",
    demonym: "Rwandan",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    demonym: "Kittian and Nevisian",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    demonym: "Saint Lucian",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    demonym: "Saint Pierre and Miquelon",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    demonym: "Saint Vincent and the Grenadines",
  },
  {
    name: "Samoa",
    code: "WS",
    demonym: "Samoan",
  },
  {
    name: "San Marino",
    code: "SM",
    demonym: "Sammarinese",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    demonym: "Sao Tomean",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    demonym: "Saudi Arabian",
  },
  {
    name: "Senegal",
    code: "SN",
    demonym: "Senegalese",
  },
  {
    name: "Serbia",
    code: "RS",
    demonym: "Serb",
  },
  {
    name: "Seychelles",
    code: "SC",
    demonym: "Seychellois",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    demonym: "Sierra Leonean",
  },
  {
    name: "Singapore",
    code: "SG",
    demonym: "Singaporean",
  },
  {
    name: "Slovakia",
    code: "SK",
    demonym: "Slovakian",
  },
  {
    name: "Slovenia",
    code: "SI",
    demonym: "Slovenian",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    demonym: "Solomon Islander",
  },
  {
    name: "Somalia",
    code: "SO",
    demonym: "Somali",
  },
  {
    name: "South Africa",
    code: "ZA",
    demonym: "South African",
  },
  {
    name: "South Sudan",
    code: "SS",
    demonym: "South Sudanese",
  },
  {
    name: "Spain",
    code: "ES",
    demonym: "Spanish",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    demonym: "Sri Lankan",
  },
  {
    name: "St. Maarten",
    code: "MF",
    demonym: "St. Maarten",
  },
  {
    name: "Sudan",
    code: "SD",
    demonym: "Sudanese",
  },
  {
    name: "Suriname",
    code: "SR",
    demonym: "Surinamer",
  },
  {
    name: "Swaziland",
    code: "SZ",
    demonym: "Swazi",
  },
  {
    name: "Sweden",
    code: "SE",
    demonym: "Swedish",
  },
  {
    name: "Switzerland",
    code: "CH",
    demonym: "Swiss",
  },
  {
    name: "Syria",
    code: "SY",
    demonym: "Syrian",
  },
  {
    name: "Taiwan",
    code: "TW",
    demonym: "Taiwanese",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    demonym: "Tajik",
  },
  {
    name: "Tanzania",
    code: "TZ",
    demonym: "Tanzanian",
  },
  {
    name: "Thailand",
    code: "TH",
    demonym: "Thai",
  },
  {
    name: "Togo",
    code: "TG",
    demonym: "Togolese",
  },
  {
    name: "Tonga",
    code: "TO",
    demonym: "Tongan",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    demonym: "Trinidad and Tobago",
  },
  {
    name: "Tunisia",
    code: "TN",
    demonym: "Tunisian",
  },
  {
    name: "Turkey",
    code: "TR",
    demonym: "Turkish",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    demonym: "Turkmen",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    demonym: "Turks and Caicos Islands",
  },
  {
    name: "Tuvalu",
    code: "TV",
    demonym: "Tuvaluan",
  },
  {
    name: "Uganda",
    code: "UG",
    demonym: "Ugandan",
  },
  {
    name: "Ukraine",
    code: "UA",
    demonym: "Ukrainian",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    demonym: "Emirian",
  },
  {
    name: "United Kingdom",
    code: "GB",
    demonym: "British",
  },
  {
    name: "United States of America",
    code: "US",
    demonym: "American",
  },
  {
    name: "United States Virgin Islands",
    code: "VI",
    demonym: "Virgin Islander",
  },
  {
    name: "Uruguay",
    code: "UY",
    demonym: "Uruguayan",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    demonym: "Uzbekistani",
  },
  {
    name: "Vanuatu",
    code: "VU",
    demonym: "Ni-Vanuatu",
  },
  {
    name: "Vatican City",
    code: "VAT",
    demonym: "Vatican City",
  },
  {
    name: "Venezuela",
    code: "VE",
    demonym: "Venezuelan",
  },
  {
    name: "Vietnam",
    code: "VN",
    demonym: "Vietnamese",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    demonym: "Wallis and Futuna",
  },
  {
    name: "Western Sahara",
    code: "EH",
    demonym: "Western Sahara",
  },
  {
    name: "Yemen",
    code: "YE",
    demonym: "Yemeni",
  },
  {
    name: "Yugoslavia",
    code: "YU",
    demonym: "Yugoslavian",
  },
  {
    name: "Zambia",
    code: "ZM",
    demonym: "Zambian",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    demonym: "Zimbabwean",
  },
];

export default CountryList;
