jQuery(document).ready(function($){

	hidePopup('#casePopup');

	// $('#call-form').submit(function(){
	// 	var form = $(this);
	// 	var error = false;
	// 	if(!error) {
	// 		var data = form.serialize();
	// 		$.ajax({
	// 			type: 'POST',
	// 			url: 'ajax.php',
	// 			dataType: 'json',
	// 			data: data,
	// 			beforeSend: function(data) {
	// 				form.find('input[type="submit"]').attr('disabled', 'disabled');
	// 			},
	// 			success: function(data) {
	// 				if(data['error']) {
	// 					alert(data['error']);
	// 				} else {
	// 					$('#call-form #tel').val('');
	// 					$('#call-form #name').val('');
	// 					alert('Благодарим за вашу заявку !');
	// 				}
	// 			},
	// 			error: function(xhr, ajaxOptions, thrownError) {
	// 				alert(xhr.status);
	// 				alert(thrownError);
	// 			},
	// 			complete: function(data) {
	// 				form.find('input[type="submit"]').prop('disabled', false);
	// 			}
	// 		});
	// 	}
	// 	return false;
	// });

	// cases
	
});

function showPopup(popupName, id) {
	// наполнить попап
	var popup = $(popupName);
	$('.case-popup-content').animate({scrollTop: '0px'}, 10);
	// alert(cases[id].number);
	var lawCase = cases[id];
	popup.find('.number').html(lawCase.number).addClass('font-roboto-slab font-size-small col-xs-8');
	popup.find('.caption').html(lawCase.caption);
	popup.find('.plf-name').html(lawCase.plf);
	popup.find('.def-name').html(lawCase.def);
	if(lawCase.myClient == 'plf') {
		popup.find('.plf .my-client').show();
		popup.find('.def .my-client').hide();
	} else {
		popup.find('.plf .my-client').hide();
		popup.find('.def .my-client').show();
	}
	popup.find('.description').html(lawCase.description);
	popup.find('.desicion').html(lawCase.desicion);
	popup.find('.des-link').attr('href', lawCase.link);
	// показать попап
	$(popupName).show();

	
}

function hidePopup(popupName) {
	$(popupName).hide();
}


var cases = { 
	
	0:{// case 0
		number: 'Дело № 208/2265/15-ц',
		caption: 'Взыскание задолженности перед агенством недвижимости',
		plf: 'Агентство недвижимости',
		def: 'Клиент агенства',
		myClient: 'plf',
		description: 'Агентство недвижимости предоставило услуги по поиску и приобретению объекта недвижимости. В результате клиент агенства недвижимости не расчитался за полученные услуги.',
		desicion: 'Решением суда иск моего клиента (агенство недвижимости) был удовлетворён полностью. Помимо суммы долга с ответчика было взыскано 3% годовых, индекс инфляции и все судебные издержки.',
		link: 'http://www.reyestr.court.gov.ua/Review/46742787'
	},
	1:{// case 1
		number: 'Дело № 209/4877/15-ц',
		caption: 'Защита прав клиента перед банком по поводу кредита',
		plf: 'ОАО “ПриватБанк” ',
		def: 'клиент банка',
		myClient: 'def',
		description: 'Мой клиент взял кредит в 2008 году в размере 1000 грн. Банк обратился в суд в 2015 году о взыскании с моего клиента 12745,8 грн. Учтя установленные в судебном заседании обстоятельства, которые были подтверждены письменно, суд пришёл к выводу об отказе в удовлетворении иска банка.',
		desicion: 'Решением суда в удовлетворении иска ОАО "Приватбанк" о взыскании задолженности было отказано полностью.',
		link: 'http://reyestr.court.gov.ua/Review/56384504'
	},
	2:{// case 2
		number: 'Дело № 209/1162/16-ц',
		caption: 'Супружеский раздел имущества',
		plf: '',
		def: 'Бывший муж',
		myClient: 'plf',
		description: 'Мой клиент просил признать за ней право частной собственности на всю квартиру, тем самым прекратить право совместной собственности супругов. Судом было установлено, что квартира была приобретена сторонами в период брака, но источником приобретения имущества стали личные средства моего клиента. Доказательств, которые подтверждали финансовое участие ответчика в приобретении этого имущества не было предоставлено суду.',
		desicion: 'Решением суда исковые требования о признании права собственности на всю квартиру за моим клиентом были удовлетворены полностью.',
		link: 'http://reyestr.court.gov.ua/Review/63750180'
	},
	3:{// case 3
		number: 'Дело № 209/1232/15-ц',
		caption: 'Взыскание с предприятия задолженности по зарплате',
		plf: 'бывший работник предприятия',
		def: 'научно-производственное предприятие “Цирконий”',
		myClient: 'plf',
		description: 'Истец обратился в суд с исковыми требованиями о взыскании с ответчика суммы задолженности по заработной плате. Дополнительно требовал взыскать сумму среднего заработка за весь период просрочки выплаты заработной платы.',
		desicion: 'Решением суда о взыскании средней заработной платы за весь период просрочки с ответчика было взыскано сумму в полном объёме.',
		link: 'http://reyestr.court.gov.ua/Review/47715826'
	},
	4:{// case 4
		number: 'Дело № 209/4790/14-ц',
		caption: 'Взыскание банковского депозита',
		plf: 'клиент банка',
		def: 'ОАО “Городской коммерческий банк”',
		myClient: 'plf',
		description: 'В обосновании своих исковых требований, клиент отмечал что в 2013 году между истцом и ответчиком был оформлен договор банковского вклада на срок до 2014 года. По окончанию срока действия договора банк сумму депозита клиенту не вернул.',
		desicion: 'Решением суда с ответчика было взыскано вся сумма вклада с начисленными процентами.',
		link: 'http://reyestr.court.gov.ua/Review/40748643'
	},
	5:{// case 5
		number: 'Дело № 207/1136/15-ц',
		caption: 'Жилищный спор',
		plf: 'Мой клиент',
		def: 'Сын и мать моего клиента',
		myClient: 'plf',
		description: 'Моему клиенту ответчик препятствовал проживать в квартире.',
		desicion: 'Решением суда исковые требования были удовлетворены полностью. Моего клиента было вселено в квартиру и взыскано с ответчика, в счёт причинённого морального ущерба, 5000 грн.',
		link: 'http://reyestr.court.gov.ua/Review/45106529'
	}
};
