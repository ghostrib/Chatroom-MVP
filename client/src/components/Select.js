import React from 'react'



const SelectOptions = (props) => {
    return (
        <select id='language-select' onChange={props.handleLanguageChange}>
            <optgroup>
                <option value="af">Afrikaans</option>
                <option value="sq">Albanian</option>
                <option value="am">Amharic</option>
                <option value="ar">Arabic</option>
                <option value="hy">Armenian</option>
                <option value="az">Azerbaijani</option>
                <option value="ba">Bashkir</option>
                <option value="eu">Basque</option>
                <option value="be">Belarusian</option>
                <option value="bn">Bengali</option>
                <option value="bs">Bosnian</option>
                <option value="bg">Bulgarian</option>
                <option value="my">Burmese</option>
                <option value="ca">Catalan</option>
                <option value="ceb">Cebuano</option>
                <option value="zh">Chinese</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="da">Danish</option>
                <option value="nl">Dutch</option>
                <option value="en">English</option>
                <option value="eo">Esperanto</option>
                <option value="et">Estonian</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="gl">Galician</option>
                <option value="ka">Georgian</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="gu">Gujarati</option>
                <option value="ht">Haitian</option>
                <option value="he">Hebrew</option>
                <option value="mrj">HillMari</option>
                <option value="hi">Hindi</option>
                <option value="hu">Hungarian</option>
                <option value="is">Icelandic</option>
                <option value="id">Indonesian</option>
                <option value="ga">Irish</option>
                <option value="it">Italian</option>
                <option value="jv">Javanese</option>
                <option value="ja">Japanese</option>
                <option value="kn">Kannada</option>
                <option value="kk">Kazakh</option>
                <option value="km">Khmer</option>
                <option value="ko">Korean</option>
                <option value="ky">Kyrgyz</option>
                <option value="lo">Lao</option>
                <option value="la">Latin</option>
                <option value="lv">Latvian</option>
                <option value="lt">Lithuanian</option>
                <option value="lb">Luxembourgish</option>
                <option value="mk">Macedonian</option>
                <option value="mg">Malagasy</option>
                <option value="ms">Malay</option>
                <option value="ml">Malayalam</option>
                <option value="mt">Maltese</option>
                <option value="mi">Maori</option>
                <option value="mr">Marathi</option>
                <option value="mhr">Mari</option>
                <option value="mn">Mongolian</option>
                <option value="ne">Nepali</option>
                <option value="no">Norwegian</option>
                <option value="pap">Papiamento</option>
                <option value="fa">Persian</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="pa">Punjabi</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="gd">ScottishGaelic</option>
                <option value="sr">Serbian</option>
                <option value="si">Sinhalese</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option selected value="es">Spanish</option>
                <option value="su">Sundanese</option>
                <option value="sw">Swahili</option>
                <option value="sv">Swedish</option>
                <option value="tl">Tagalog</option>
                <option value="tg">Tajik</option>
                <option value="ta">Tamil</option>
                <option value="tt">Tatar</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="udm">Udmurt</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="uz">Uzbek</option>
                <option value="vi">Vietnamese</option>
                <option value="cy">Welsh</option>
                <option value="xh">Xhosa</option>
                <option value="yi">Yiddish</option>
            </optgroup>
        </select>
    )
}

export default SelectOptions;
