
/* Smart HTML Elements v7.4.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var n={};function r(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,n,a){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(a,i,function(n){return e[n]}.bind(null,i));return a},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=72)}({72:function(e,n){Smart.Utilities.Assign("CurrencyFormatPanel",class{constructor(e,n="en",r=""){this.currencies=[{currency:"US Dollar",sign:"$",abbreviation:"USD"},{currency:"Afghan Afghani",sign:"Af.",abbreviation:"AFN"},{currency:"Albanian Lek",sign:"Lek",abbreviation:"ALL"},{currency:"Algerian Dinar",sign:"din",abbreviation:"DZD"},{currency:"Angolan Kwanza",sign:"Kz",abbreviation:"AOA"},{currency:"Argentine Peso",sign:"$",abbreviation:"ARS"},{currency:"Armenian Dram",sign:"Dram",abbreviation:"AMD"},{currency:"Aruban Florin",sign:"Afl.",abbreviation:"AWG"},{currency:"Australian Dollar",sign:"$",abbreviation:"AUD"},{currency:"Azerbaijani Manat",sign:"₼",abbreviation:"AZN"},{currency:"Bahamian Dollar",sign:"$",abbreviation:"BSD"},{currency:"Bahraini Dinar",sign:"din",abbreviation:"BHD"},{currency:"Bangladeshi Taka",sign:"৳",abbreviation:"BDT"},{currency:"Barbadian Dollar",sign:"$",abbreviation:"BBD"},{currency:"Belarusian Ruble",sign:"р.",abbreviation:"BYN"},{currency:"Belarusian Ruble",sign:"р.",abbreviation:"BYR"},{currency:"Belize Dollar",sign:"$",abbreviation:"BZD"},{currency:"Bermudan Dollar",sign:"$",abbreviation:"BMD"},{currency:"Bhutanese Ngultrum",sign:"Nu.",abbreviation:"BTN"},{currency:"Bolivian Boliviano",sign:"Bs",abbreviation:"BOB"},{currency:"Bosnia-Herzegovina Convertible Mark",sign:"KM",abbreviation:"BAM"},{currency:"Botswanan Pula",sign:"P",abbreviation:"BWP"},{currency:"Brazilian Real",sign:"R$",abbreviation:"BRL"},{currency:"British Pound Sterling",sign:"£",abbreviation:"GBP"},{currency:"Brunei Dollar",sign:"$",abbreviation:"BND"},{currency:"Bulgarian Lev",sign:"lev",abbreviation:"BGN"},{currency:"Burundian Franc",sign:"FBu",abbreviation:"BIF"},{currency:"Cambodian Riel",sign:"Riel",abbreviation:"KHR"},{currency:"Canadian Dollar",sign:"$",abbreviation:"CAD"},{currency:"Cape Verdean Escudo",sign:"CVE",abbreviation:"CVE"},{currency:"Cayman Islands Dollar",sign:"$",abbreviation:"KYD"},{currency:"CFA Franc BCEAO",sign:"CFA",abbreviation:"XOF"},{currency:"CFA Franc BEAC",sign:"FCFA",abbreviation:"XAF"},{currency:"CFP Franc",sign:"FCFP",abbreviation:"XPF"},{currency:"Chilean Peso",sign:"$",abbreviation:"CLP"},{currency:"Chinese Yuan",sign:"¥",abbreviation:"CNY"},{currency:"Chinese Yuan (offshore)",sign:"¥",abbreviation:"RMB"},{currency:"Colombian Peso",sign:"$",abbreviation:"COP"},{currency:"Comorian Franc",sign:"CF",abbreviation:"KMF"},{currency:"Congolese Franc",sign:"FrCD",abbreviation:"CDF"},{currency:"Costa Rican Colon",sign:"₡",abbreviation:"CRC"},{currency:"Croatian Kuna",sign:"kn",abbreviation:"HRK"},{currency:"Cuban Convertible Peso",sign:"$",abbreviation:"CUC"},{currency:"Cuban Peso",sign:"$",abbreviation:"CUP"},{currency:"Czech Republic Koruna",sign:"Kč",abbreviation:"CZK"},{currency:"Danish Krone",sign:"kr.",abbreviation:"DKK"},{currency:"Djiboutian Franc",sign:"Fdj",abbreviation:"DJF"},{currency:"Dominican Peso",sign:"RD$",abbreviation:"DOP"},{currency:"East Caribbean Dollar",sign:"$",abbreviation:"XCD"},{currency:"Egyptian Pound",sign:"£",abbreviation:"EGP"},{currency:"Eritrean Nakfa",sign:"Nfk",abbreviation:"ERN"},{currency:"Ethiopian Birr",sign:"Birr",abbreviation:"ETB"},{currency:"Euro",sign:"€",abbreviation:"EUR"},{currency:"Falkland Islands Pound",sign:"£",abbreviation:"FKP"},{currency:"Fijian Dollar",sign:"$",abbreviation:"FJD"},{currency:"Gambian Dalasi",sign:"GMD",abbreviation:"GMD"},{currency:"Georgian Lari",sign:"GEL",abbreviation:"GEL"},{currency:"Ghanaian Cedi",sign:"GHS",abbreviation:"GHS"},{currency:"Gibraltar Pound",sign:"£",abbreviation:"GIP"},{currency:"Guatemalan Quetzal",sign:"Q",abbreviation:"GTQ"},{currency:"Guinean Franc",sign:"FG",abbreviation:"GNF"},{currency:"Guyanaese Dollar",sign:"$",abbreviation:"GYD"},{currency:"Haitian Gourde",sign:"HTG",abbreviation:"HTG"},{currency:"Honduran Lempira",sign:"L",abbreviation:"HNL"},{currency:"Hong Kong Dollar",sign:"$",abbreviation:"HKD"},{currency:"Hungarian Forint",sign:"Ft",abbreviation:"HUF"},{currency:"Icelandic Krona",sign:"kr",abbreviation:"ISK"},{currency:"Indian Rupee",sign:"₹",abbreviation:"INR"},{currency:"Indonesian Rupiah",sign:"Rp",abbreviation:"IDR"},{currency:"Iranian Rial",sign:"Rial",abbreviation:"IRR"},{currency:"Iraqi Dinar",sign:"din",abbreviation:""},{currency:"Israeli New Sheqel",sign:" ₪",abbreviation:"ILS"},{currency:"Jamaican Dollar",sign:"$",abbreviation:"JMD"},{currency:"Japanese Yen",sign:"¥",abbreviation:"JPY"},{currency:"Jordanian Dinar",sign:"din",abbreviation:"JOD"},{currency:"Kazakhstani Tenge",sign:"₸",abbreviation:"KZT"},{currency:"Kenyan Shilling",sign:"Ksh",abbreviation:"KES"},{currency:"Kuwaiti Dinar",sign:"din",abbreviation:"KWD"},{currency:"Kyrgystani Som",sign:"KGS",abbreviation:"KGS"},{currency:"Laotian Kip",sign:"₭",abbreviation:"LAK"},{currency:"Lebanese Pound",sign:"L£",abbreviation:"LBP"},{currency:"Lesotho Loti",sign:"LSL",abbreviation:"LSL"},{currency:"Liberian Dollar",sign:"$",abbreviation:"LRD"},{currency:"Libyan Dinar",sign:"din",abbreviation:"LYD"},{currency:"Lithuanian Litas",sign:"Lt",abbreviation:"LTL"},{currency:"Macanese Pataca",sign:"MOP",abbreviation:"MOP"},{currency:"Macedonian Denar",sign:"din",abbreviation:"MKD"},{currency:"Malagasy Ariary",sign:"Ar",abbreviation:"MGA"},{currency:"Malawian Kwacha",sign:"MWK",abbreviation:"MWK"},{currency:"Malaysian Ringgit",sign:"RM",abbreviation:"MYR"},{currency:"Maldivian Rufiyaa",sign:"Rf",abbreviation:"MVR"},{currency:"Mauritanian Ouguiya",sign:"MRO",abbreviation:"MRO"},{currency:"Mauritian Rupee",sign:"MURs",abbreviation:"MUR"},{currency:"Mexican Peso",sign:"$",abbreviation:"MXN"},{currency:"Moldovan Leu",sign:"MDL",abbreviation:"MDL"},{currency:"Mongolian Tugrik",sign:"₮",abbreviation:"MNT"},{currency:"Moroccan Dirham",sign:"dh",abbreviation:"MAD"},{currency:"Mozambican Metical",sign:"MTn",abbreviation:"MZN"},{currency:"Myanma Kyat",sign:"K",abbreviation:"MMK"},{currency:"Namibian Dollar",sign:"$",abbreviation:"NAD"},{currency:"Nepalese Rupee",sign:"Rs",abbreviation:"NPR"},{currency:"Netherlands Antillean Guilder",sign:"NAf.",abbreviation:"ANG"},{currency:"New Taiwan Dollar",sign:"NT$",abbreviation:"TWD"},{currency:"New Zealand Dollar",sign:"$",abbreviation:"NZD"},{currency:"Nicaraguan Cordoba",sign:"C$",abbreviation:"NIO"},{currency:"Nigerian Naira",sign:"₦",abbreviation:"NGN"},{currency:"North Korean Won",sign:"₩KP",abbreviation:"KPW"},{currency:"Norwegian Krone",sign:"kr",abbreviation:"NOK"},{currency:"Omani Rial",sign:"Rial",abbreviation:"OMR"},{currency:"Pakistani Rupee",sign:"Rs",abbreviation:"PKR"},{currency:"Panamanian Balboa",sign:"B/.",abbreviation:"PAB"},{currency:"Papua New Guinean Kina",sign:"PGK",abbreviation:"PGK"},{currency:"Paraguayan Guarani",sign:"Gs.",abbreviation:"PYG"},{currency:"Peruvian Nuevo Sol",sign:"S/.",abbreviation:"PEN"},{currency:"Philippine Peso",sign:"₱",abbreviation:"PHP"},{currency:"Polish Zloty",sign:"zł",abbreviation:"PLN"},{currency:"Qatari Rial",sign:"Rial",abbreviation:"QAR"},{currency:"Romanian Leu",sign:"RON",abbreviation:"RON"},{currency:"Russian Ruble",sign:"₽",abbreviation:"RUB"},{currency:"Rwandan Franc",sign:"RF",abbreviation:"RWF"},{currency:"Saint Helena Pound",sign:"£",abbreviation:"SHP"},{currency:"Samoan Tala",sign:"WST",abbreviation:"WST"},{currency:"Sao Tomean Dobra",sign:"Db",abbreviation:"STD"},{currency:"Saudi Riyal",sign:"Rial",abbreviation:"SAR"},{currency:"Serbian Dinar",sign:"din",abbreviation:"RSD"},{currency:"Seychellois Rupee",sign:"SCR",abbreviation:"SCR"},{currency:"Sierra Leonean Leone",sign:"SLL",abbreviation:"SLL"},{currency:"Singapore Dollar",sign:"$",abbreviation:"SGD"},{currency:"Solomon Islands Dollar",sign:"$",abbreviation:"SBD"},{currency:"Somali Shilling",sign:"SOS",abbreviation:"SOS"},{currency:"South African Rand",sign:"R",abbreviation:"ZAR"},{currency:"South Korean Won",sign:"₩",abbreviation:"KRW"},{currency:"South Sudanese Pound",sign:"£",abbreviation:"SSP"},{currency:"Sri Lankan Rupee",sign:"Rs",abbreviation:"LKR"},{currency:"Sudanese Pound",sign:"SDG",abbreviation:"SDG"},{currency:"Surinamese Dollar",sign:"$",abbreviation:"SRD"},{currency:"Swazi Lilangeni",sign:"SZL",abbreviation:"SZL"},{currency:"Swedish Krona",sign:"kr",abbreviation:"SEK"},{currency:"Swiss Franc",sign:"CHF",abbreviation:"CHF"},{currency:"Syrian Pound",sign:"£",abbreviation:"SYP"},{currency:"Tajikistani Somoni",sign:"Som",abbreviation:"TJS"},{currency:"Tanzanian Shilling",sign:"TSh",abbreviation:"TZS"},{currency:"Thai Baht",sign:"฿",abbreviation:"THB"},{currency:"Tongan Pa'anga",sign:"T$",abbreviation:"TOP"},{currency:"Trinidad and Tobago Dollar",sign:"$",abbreviation:"TTD"},{currency:"Tunisian Dinar",sign:"din",abbreviation:"TND"},{currency:"Turkish Lira",sign:"₺",abbreviation:"TRY"},{currency:"Turkmenistani Manat",sign:"m",abbreviation:"TMT"},{currency:"Ugandan Shilling",sign:"UGX",abbreviation:"UGX"},{currency:"Ukrainian Hryvnia",sign:"грн.",abbreviation:"UAH"},{currency:"United Arab Emirates Dirham",sign:"dh",abbreviation:"AED"},{currency:"Uruguayan Peso",sign:"$",abbreviation:"UYU"},{currency:"Uzbekistan Som",sign:"soʼm",abbreviation:"UZS"},{currency:"Vanuatu Vatu",sign:"VUV",abbreviation:"VUV"},{currency:"Venezuelan Bolivar",sign:"Bs",abbreviation:"VEF"},{currency:"Venezuelan Bolivar",sign:"Bs",abbreviation:"VES"},{currency:"Vietnamese Dong",sign:"₫",abbreviation:"VND"},{currency:"Yemeni Rial",sign:"Rial",abbreviation:"YER"},{currency:"Zambian Kwacha",sign:"ZMW",abbreviation:"ZMW"},{currency:"Zimbabwean Dollar",sign:"$",abbreviation:"ZWD"}],this.mainContainer=document.querySelector(e),this.selectedCurrencyFullValue="1,000.00",this.selectedCurrencyValue="1,000",this.demoContainerHolder=document.createElement("div"),this.demoContainerHolder.classList.add("currency-format-panel-demo-container"),this._setLocalizationSettings(n,r),this._generateSelectedCurrencyHolderAndApply(),this._generateCurrencyHolder(),this.mainContainer.appendChild(this.demoContainerHolder)}_setLocalizationSettings(e,n){const r=this;r.locale=e,r.messages=n,r.defaultLocale="en",r.defaultMessages={en:{apply:"apply"}},r.messages||(r.messages=r.defaultMessages),r.messages[r.locale]||(r.messages[r.defaultLocale]||(r.messages=r.defaultMessages),r.locale=r.defaultLocale)}_generateSelectedCurrencyHolderAndApply(){const e=this;let n=document.createElement("div");n.classList.add("selected-currency-holder-and-apply-holder");let r=document.createElement("div");r.classList.add("selected-currency-holder");let a=document.createElement("div");a.classList.add("currency-sign-input-holder"),e.currencySignTextBox=document.createElement("smart-text-box"),e.currencySignTextBox.classList.add("currency-sign-input");const i=()=>e._filterCurrencies();e.currencySignTextBox.addEventListener("keyup",i),e.currencySignTextBox["currency-sign-input"]=i,a.appendChild(e.currencySignTextBox),r.appendChild(a);let t=document.createElement("div");t.classList.add("currency-smart-input-holder"),e.inputCurrencyFormats=document.createElement("smart-input"),e.inputCurrencyFormats.dropDownWidth="auto",e.inputCurrencyFormats.dropDownButtonPosition="right",e.inputCurrencyFormats.readonly=!0,e.inputCurrencyFormats.classList.add("input-currency-formats"),t.appendChild(e.inputCurrencyFormats),r.appendChild(t);let s=document.createElement("div");s.classList.add("apply-button-holder"),e.applyButton=document.createElement("smart-button"),e.applyButton.classList.add("use-format-button"),e.applyButton.classList.add("success"),e.applyButton.innerHTML=e.messages[e.locale].apply?e.messages[e.locale].apply:e.defaultMessages[e.defaultLocale].apply;const o=()=>e.value=e.getFormat();e.applyButton.addEventListener("click",o),e.applyButton["apply-button-event-listener"]=o,s.appendChild(e.applyButton),n.appendChild(r),n.appendChild(s),e.demoContainerHolder.appendChild(n)}detach(){this._removeEventListeners()}_removeEventListeners(){this.currencySignTextBox.removeEventListener("keyup",this.currencySignTextBox["currency-sign-input"]),delete this.currencySignTextBox["currency-sign-input"],this.applyButton.removeEventListener("click",this.applyButton["apply-button-event-listener"]),delete this.applyButton["apply-button-event-listener"];let e=document.querySelectorAll(".currency-item");for(let n=0;n<e.length;n++){let r=e[n],a=e[n].dataset.currency;r.removeEventListener("click",r[a]),delete r[a]}}getFormat(){const e=this;let n,r=e.inputCurrencyFormats.value;return r.includes(e.selectedCurrencyFullValue)?n=r.replace(e.selectedCurrencyFullValue,'"#,#.00"'):r.includes(e.selectedCurrencyValue)&&(n=r.replace(e.selectedCurrencyValue,'"#,#"')),n="'\""+n+"\"'",n}_generateCurrencyHolder(){this.currencyHolder=document.createElement("div"),this.currencyHolder.classList.add("currency-list"),this._setCurrencies(this.currencies),this.demoContainerHolder.appendChild(this.currencyHolder)}_setCurrencies(e){const n=this;n.currencyHolder.innerHTML="";for(let r=0;r<e.length;r++){let a=e[r],i=e[r].currency,t=e[r].sign,s=document.createElement("div");s.classList.add("currency-item"),s.innerHTML=i,s.dataset.currency=i.replace(" ","_")+"_"+r;let o=document.createElement("div");o.classList.add("currency-item-default-format"),o.innerHTML=t+" "+n.selectedCurrencyFullValue,s.appendChild(o),n.currencyHolder.appendChild(s),0===r&&n.useThisFormat(a);const c=()=>n.useThisFormat(a);s.addEventListener("click",c),s[i.replace(" ","_")+"_"+r]=c}}_filterCurrencies(){const e=this;let n=e.currencySignTextBox.value.toLowerCase(),r=[];for(let a=0;a<e.currencies.length;a++){-1!==e.currencies[a].currency.toLowerCase().indexOf(n)&&r.push(e.currencies[a])}e._setCurrencies(r);let a=[];0!==n.length&&(a.push(n+e.selectedCurrencyFullValue),a.push(n+e.selectedCurrencyValue)),a.push(e.selectedCurrencyFullValue+n),a.push(e.selectedCurrencyValue+n),e.inputCurrencyFormats.dataSource=a,e.inputCurrencyFormats.value=a[0]}useThisFormat(e){let n=e.sign,r=e.abbreviation;this.currencySignTextBox.value=n;let a=[];a.push(n+this.selectedCurrencyFullValue),a.push(r+" "+n+this.selectedCurrencyFullValue),a.push(n+this.selectedCurrencyValue),a.push(this.selectedCurrencyFullValue+n),a.push(this.selectedCurrencyValue+n),this.inputCurrencyFormats.dataSource=a,this.inputCurrencyFormats.value=a[0]}}),Smart.Utilities.Assign("NumberFormatPanel",class{constructor(e,n="en",r=""){this.formats=["0","0.00","#,##0","#,##0.00","#,##0_);(#,##0)","$#,##0_);($#,##0)","#,##0.00_);(#,##0.00)","$#,##0.00_);($#,##0.00)","@","0%","0.00%","0.00E+00","##0.0E+0","# ?/?","# ??/??",'_($* #,##0_);_($* (#,##0);_($* "-"_);_(@_)','_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)','_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)','_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)'],this.sampleDemoValue=1234.56,this.mainContainer=document.querySelector(e),this.demoContainerHolder=document.createElement("div"),this.demoContainerHolder.classList.add("number-format-panel-demo-container"),this._setLocalizationSettings(n,r),this._generateSelectedNumberFormatHolderAndApply(),this._generateExampleContainer(),this._generateCustomFormatsHolder(),this.useThisFormat(this.initialCustomNumberFormatValue),this.mainContainer.appendChild(this.demoContainerHolder)}_setLocalizationSettings(e,n){const r=this;r.locale=e,r.messages=n,r.defaultLocale="en",r.defaultMessages={en:{apply:"apply",sample:"Sample",positive:"Positive",negative:"Negative",zero:"Zero",text:"Text"}},r.messages||(r.messages=r.defaultMessages),r.messages[r.locale]||(r.messages[r.defaultLocale]||(r.messages=r.defaultMessages),r.locale=r.defaultLocale)}_generateSelectedNumberFormatHolderAndApply(){const e=this;let n=document.createElement("div");n.classList.add("selected-custom-number-format-holder-and-apply-holder");let r=document.createElement("div");r.classList.add("selected-custom-number-format-holder");let a=document.createElement("div");a.classList.add("custom-number-format-input-holder"),e.customNumberFormatTextBox=document.createElement("smart-text-box"),e.customNumberFormatTextBox.classList.add("custom-number-format-input");const i=()=>e._filterCustomFormat();e.customNumberFormatTextBox.addEventListener("keyup",i),e.customNumberFormatTextBox["custom-number-format-input"]=i,a.appendChild(e.customNumberFormatTextBox),r.appendChild(a);let t=document.createElement("div");t.classList.add("apply-button-holder"),e.applyButton=document.createElement("smart-button"),e.applyButton.classList.add("use-number-format-button"),e.applyButton.classList.add("success"),e.applyButton.innerHTML=e.messages[e.locale].apply?e.messages[e.locale].apply:e.defaultMessages[e.defaultLocale].apply;const s=()=>e.value=e.getFormat();e.applyButton.addEventListener("click",s),e.applyButton["apply-button-event-listener"]=s,t.appendChild(e.applyButton),n.appendChild(r),n.appendChild(t),e.demoContainerHolder.appendChild(n)}detach(){this._removeEventListeners()}_removeEventListeners(){this.customNumberFormatTextBox.removeEventListener("keyup",this.customNumberFormatTextBox["custom-number-format-input"]),delete this.customNumberFormatTextBox["custom-number-format-input"],this.applyButton.removeEventListener("click",this.applyButton["apply-button-event-listener"]),delete this.applyButton["apply-button-event-listener"];let e=document.querySelectorAll(".custom-number-format-item");for(let n=0;n<e.length;n++){let r=e[n];r.removeEventListener("click",r[n]),delete r[n]}}getFormat(){return this.customNumberFormatTextBox.value}_generateExampleContainer(){let e=document.createElement("div");e.classList.add("sample-container"),this.sampleTextHolder=document.createElement("div"),this.sampleTextHolder.classList.add("sample-text-container"),this.positiveTextHolder=document.createElement("div"),this.positiveTextHolder.classList.add("positive-text-container"),this.negativeTextHolder=document.createElement("div"),this.negativeTextHolder.classList.add("negative-text-container"),this.zeroTextHolder=document.createElement("div"),this.zeroTextHolder.classList.add("zero-text-container"),this.textHolder=document.createElement("div"),this.textHolder.classList.add("text-container"),e.appendChild(this.sampleTextHolder),e.appendChild(this.positiveTextHolder),e.appendChild(this.negativeTextHolder),e.appendChild(this.zeroTextHolder),e.appendChild(this.textHolder),this.demoContainerHolder.appendChild(e)}_generateCustomFormatsHolder(){this.customNumberFormatHolder=document.createElement("div"),this.customNumberFormatHolder.classList.add("custom-number-format-list"),this._setNumberFormats(this.formats),this.demoContainerHolder.appendChild(this.customNumberFormatHolder)}_setNumberFormats(e){const n=this;n.customNumberFormatHolder.innerHTML="";for(let r=0;r<e.length;r++){let a=e[r],i=document.createElement("div");i.classList.add("custom-number-format-item"),i.innerHTML=a;let t=document.createElement("div");t.classList.add("custom-number-format-item-default-format"),t.innerHTML=(new Smart.Utilities.NumberRenderer).formatNumber(n.sampleDemoValue,a),i.appendChild(t),n.customNumberFormatHolder.appendChild(i),0===r&&(n.initialCustomNumberFormatValue=a);const s=()=>n.useThisFormat(a);i.addEventListener("click",s),i[r]=s}}_filterCustomFormat(){const e=this;let n=e.customNumberFormatTextBox.value,r=[];for(let a=0;a<e.formats.length;a++){-1!==e.formats[a].indexOf(n)&&r.push(e.formats[a])}e._setNumberFormats(r),e.useThisFormat(n)}useThisFormat(e){const n=this;let r="",a="",i="",t="",s="",o=(n.messages[n.locale].sample?n.messages[n.locale].sample:n.defaultMessages[n.defaultLocale].sample)+": "+(new Smart.Utilities.NumberRenderer).formatNumber(n.sampleDemoValue,e),c=(n.messages[n.locale].positive?n.messages[n.locale].positive:n.defaultMessages[n.defaultLocale].positive)+": "+(new Smart.Utilities.NumberRenderer).formatNumber(Math.abs(n.sampleDemoValue),e),u=(n.messages[n.locale].negative?n.messages[n.locale].negative:n.defaultMessages[n.defaultLocale].negative)+": "+(new Smart.Utilities.NumberRenderer).formatNumber(-Math.abs(n.sampleDemoValue),e),l=(n.messages[n.locale].zero?n.messages[n.locale].zero:n.defaultMessages[n.defaultLocale].zero)+": "+(new Smart.Utilities.NumberRenderer).formatNumber(0,e),b=(n.messages[n.locale].text?n.messages[n.locale].text:n.defaultMessages[n.defaultLocale].text)+": "+(new Smart.Utilities.NumberRenderer).formatNumber(n.messages[n.locale].text.toLowerCase()?n.messages[n.locale].text.toLowerCase():n.defaultMessages[n.defaultLocale].text.toLowerCase(),e);var d=(e.match(/;/g)||[]).length;if(0===d?r=o:1===d?(a=c,i=u):2===d?(a=c,i=u,t=l):(a=c,i=u,t=l,s=b),n.sampleTextHolder.innerHTML=r,n.positiveTextHolder.innerHTML=a,n.negativeTextHolder.innerHTML=i,n.zeroTextHolder.innerHTML=t,n.textHolder.innerHTML=s,n.customNumberFormatTextBox.value=e,null===n.demoContainerHolder.querySelector(".custom-number-format-item"))n.demoContainerHolder.querySelector(".custom-number-format-list").classList.add("smart-hidden");else{let e=n.demoContainerHolder.querySelector(".custom-number-format-list").classList;for(let n=0;n<e.length;n++)"smart-hidden"!==e[n]||e.remove("smart-hidden")}}})}});