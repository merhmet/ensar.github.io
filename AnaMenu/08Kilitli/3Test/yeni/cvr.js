
function akontrol() {
    var a = document.getElementsByTagName("a");
    var domain = "altin.in";

    var baglanti = new Array();
    baglanti[0] = domain;
    baglanti[1] = "www."+domain;
    baglanti[2] = "kur."+domain;

	for(i=0;i<a.length;i++) {
		h = a[i].href;
		for (b = 0; baglanti.length>b;b++) {
        	if (h.indexOf("//"+baglanti[b]) != -1) {
            	if (a[i].name == "doviz_cevirici") {a[i].style.display="none";}
            	onay = true;
            }
        }
	}
}
function link_sonuc(t) {
    var s = 2;t = (t == null)?0:(t=t+1);
	if (t == s) {
        akontrol();
        var domain = "altin.in";
        if (onay == false) {
            alert('L�tfen d�viz �evirici kodlar�ndan �nce a�a��daki kodu ekleyiniz.\n<a name="doviz_cevirici" href="http://'+domain+'/">D�viz</a>');
        }
	t=0;return false;}
	window.setTimeout(function() {link_sonuc(t);}, 1000);
}

var onay = false;
akontrol();link_sonuc();

html = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"X-UA-Compatible\" content=\"IE=EmulateIE7\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-9\" /><script type=\"text/javascript\">var doviz_kuru_satis = new Array(1,24.7370,23.1480,28.8020,0.1664,25.4870,17.2840,15.4450,69.9882,3.3010,2.1230,2.0850,6.1690,0.2646,13.0944,57.2911,1.2367,5.8656,1.1198,3.0256,0.0164);var doviz_kuru_alis = new Array(1,24.5360,22.9950,28.3770,0.1620,25.1840,17.0030,15.1250,69.9882,3.2450,2.0840,2.0460,6.0780,0.2646,13.0944,57.2911,1.2367,5.8656,1.1198,3.0256,0.0164);function doviz() {var birim = document.getElementById('birim').selectedIndex;var birim2 = document.getElementById('birim2').selectedIndex;var para = document.getElementById('para').value.toString().replace(/,/g,'');if (document.getElementsByName('satisalis')[0].checked == true) {var cvr = para * ((doviz_kuru_satis[birim])/(doviz_kuru_satis[birim2]))/1;} else {var cvr = para * ((doviz_kuru_alis[birim])/(doviz_kuru_alis[birim2]))/1;}document.getElementById('para').value = numberFormat(para);if (!isNaN(cvr)) {document.getElementById('para2').value = numberFormat(cvr.toFixed(2))+' '+document.getElementById('birim2').options[birim2].value;}};function numberFormat(nStr){nStr += '';x = nStr.split('.');x1 = x[0];x2 = x.length > 1 ? '.' + x[1] : '';var rgx = /(\d+)(\d{3})/;while (rgx.test(x1))x1 = x1.replace(rgx, '$1' + ',' + '$2');return x1 + x2;};function tersdoviz(){var birim = document.getElementById('birim');var birim2 = document.getElementById('birim2');tur = birim.selectedIndex;tur2 = birim2.selectedIndex; birim.options[tur2].selected = true;birim2.options[tur].selected = true;doviz();};</script><style type=\"text/css\">img {border:none;}a {outline:none;}body,form,p,h1,h2,h3,h4,ul,li {margin:0px;padding:0px;}.doviz_cevirici {font-family:verdana;font-size:11px;width:120px; text-align:left;color:#FFFFFF;}.doviz_cevirici input {font-family:arial;font-size:13px;}.doviz_cevirici select { font-family:arial; width:100%;}.doviz_cevirici ul { margin:0px; padding:0px; border: none !important;}.doviz_cevirici li {margin:0px;padding:0px;overflow:hidden;}.doviz_cevirici li.giris input {width:80%;}.doviz_cevirici li.giris,li.birim,li.cevir,li.birim2,li.alisatis {height:22px; margin-bottom:5px !important;}.doviz_cevirici li#birimleri_ters_cevir {text-align:center; width:100%;height:22px;}.doviz_cevirici #birimleri_ters_cevir{display:block}.doviz_cevirici #birimleri_ters_cevir input {font-size:12px;width:100%;}.doviz_cevirici li.sonuc{ height:36px;}.doviz_cevirici li.ne {margin-top:5px !important;}</style></head><body onload=\"\"><div class=\"doviz_cevirici\" title=\"Serbest Piyasa - G�ncelleme: 7/6/2023 10:55:28\"><ul><li class=\"miktar\"><b>Miktar:</b></li><li class=\"giris\"><input type=\"text\" name=\"para\" id=\"para\" onkeyup=\"doviz()\" autocomplete=\"off\"  /></li><li class=\"birim\"><select id=\"birim\" onchange=\"doviz()\" onkeyup=\"doviz()\"><option value=\"TL\" selected=\"selected\">T�rk Liras�</option><option value='EUR'>Euro</option><option value='USD'>Amerikan Dolar�</option><option value='GBP'>�ngiliz Sterlini</option><option value='JPY'>Japon Yeni</option><option value='CHF'>�svi�re Frang�</option><option value='CAD'>Kanada Dolar�</option><option value='AUD'>Avustralya Dolar�</option><option value='KWD'>Kuveyt Dinar�</option><option value='DKK'>Danimarka Kronu</option><option value='SEK'>�sve� Kronu</option><option value='NOK'>Norve� Kronu</option><option value='SAR'>Suudi Arabistan Riyali</option><option value='RUB'>Rus Rublesi</option><option value='NZD'>Yeni Zelanda Dolar�</option><option value='BHD'>Bahreyn Dinar�</option><option value='MXN'>Meksika Pezosu</option><option value='AED'>Birle�ik Arap Emirlikleri Dirhemi</option><option value='ZAR'>G�ney Afrika Rand�</option><option value='CNY'>�in Yuan Renminbi</option><option value='IQD'>Irak Dinar�</option></select></li><li id=\"birimleri_ters_cevir\" class=\"cevir\"><input type=\"button\" name=\"ters_cevir\" id=\"ters_cevir\" onclick=\"tersdoviz()\" value=\"Birimleri Ters �evir\" /><li class=\"birim2\"><select id=\"birim2\" onchange=\"doviz()\" onkeyup=\"doviz()\"><option value=\"TL\">T�rk Liras�</option><option value='EUR' selected='selected'>Euro</option><option value='USD'>Amerikan Dolar�</option><option value='GBP'>�ngiliz Sterlini</option><option value='JPY'>Japon Yeni</option><option value='CHF'>�svi�re Frang�</option><option value='CAD'>Kanada Dolar�</option><option value='AUD'>Avustralya Dolar�</option><option value='KWD'>Kuveyt Dinar�</option><option value='DKK'>Danimarka Kronu</option><option value='SEK'>�sve� Kronu</option><option value='NOK'>Norve� Kronu</option><option value='SAR'>Suudi Arabistan Riyali</option><option value='RUB'>Rus Rublesi</option><option value='NZD'>Yeni Zelanda Dolar�</option><option value='BHD'>Bahreyn Dinar�</option><option value='MXN'>Meksika Pezosu</option><option value='AED'>Birle�ik Arap Emirlikleri Dirhemi</option><option value='ZAR'>G�ney Afrika Rand�</option><option value='CNY'>�in Yuan Renminbi</option><option value='IQD'>Irak Dinar�</option></select></li><li class=\"alisatis\">Sat��<input type=\"radio\" name=\"satisalis\" onclick=\"doviz()\" checked=\"checked\" />Al��<input onclick=\"doviz()\" type=\"radio\" name=\"satisalis\" /></li><li class=\"sonuc\"><b>Sonu�:</b><input style=\"width:80%;\" type=\"text\" name=\"para2\" id=\"para2\" onfocus=\"blur()\" /></li><li class=\"ne\"><a id=\"plink\" title=\"Serbest Piyasa: D�viz �evirici\" href=\"http://kur.altin.in/banka\" target=\"_blank\"><img alt=\"Serbest Piyasa: D�viz �evirici\" src=\"//eklenti.altin.in/grafik/mini.logo.gif\" /></a></li></ul></div><script type='text/javascript'>doviz();</script></body></html>";

rnd = Math.floor(Math.random()*1000);
document.write("<iframe id='dovizceviriciframe"+rnd+"' scrolling='no' frameborder='0' allowtransparency='yes' style='height:"+200+"px;width:"+120+"px;'></iframe>");
var iframe = document.getElementById('dovizceviriciframe'+rnd);
iframe = (iframe.contentWindow)?iframe.contentWindow:(iframe.contentDocument.document)?iframe.contentDocument.document:iframe.contentDocument;
iframe.document.open();
iframe.document.charset="ISO-8859-9";
iframe.document.write(html);
iframe.document.close();