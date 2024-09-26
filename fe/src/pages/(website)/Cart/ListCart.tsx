import { Footer, Header } from 'antd/es/layout/layout';

const ListCart = () => {
  return (
    <>
    <Header/>
  {/* preload */}
  <div className="preload preload-container">
    <div className="preload-logo">
      <div className="spinner" />
    </div>
  </div>
  {/* /preload */}
  <div id="wrapper">
    {/* page-title */}
    <div className="tf-page-title">
      <div className="container-full">
        <div className="heading text-center">Shopping Cart</div>
      </div>
    </div>
    {/* /page-title */}
    {/* page-cart */}
    <section className="flat-spacing-11">
      <div className="container">
        <div className="tf-cart-countdown">
          <div className="title-left">
            <svg className="d-inline-block" xmlns="http://www.w3.org/2000/svg" width={16} height={24} viewBox="0 0 16 24" fill="rgb(219 18 21)">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0899 24C11.3119 22.1928 11.4245 20.2409 10.4277 18.1443C10.1505 19.2691 9.64344 19.9518 8.90645 20.1924C9.59084 18.2379 9.01896 16.1263 7.19079 13.8576C7.15133 16.2007 6.58824 17.9076 5.50148 18.9782C4.00436 20.4517 4.02197 22.1146 5.55428 23.9669C-0.806588 20.5819 -1.70399 16.0418 2.86196 10.347C3.14516 11.7228 3.83141 12.5674 4.92082 12.8809C3.73335 7.84186 4.98274 3.54821 8.66895 0C8.6916 7.87426 11.1062 8.57414 14.1592 12.089C17.4554 16.3071 15.5184 21.1748 10.0899 24Z" />
            </svg>
            <p>These products are limited, checkout within </p>
          </div>
          <div className="js-countdown timer-count" data-timer={600} data-labels="d:,h:,m:,s" />
        </div>
        <div className="tf-page-cart-wrap">
          <div className="tf-page-cart-item">
            <form>
              <table className="tf-table-page-cart">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tf-cart-item file-delete">
                    <td className="tf-cart-item_product">
                      <a href="product-detail.html" className="img-box">
                        <img src="images/products/white-2.jpg" alt="img-product" />
                      </a>
                      <div className="cart-info">
                        <a href="product-detail.html" className="cart-title link">Oversized Printed T-shirt</a>
                        <div className="cart-meta-variant">White / M</div>
                        <span className="remove-cart link remove">Remove</span>
                      </div>
                    </td>
                    <td className="tf-cart-item_price" cart-data-title="Price">
                      <div className="cart-price">$18.00</div>
                    </td>
                    <td className="tf-cart-item_quantity" cart-data-title="Quantity">
                      <div className="cart-quantity">
                        <div className="wg-quantity">
                          <span className="btn-quantity minus-btn">
                            <svg className="d-inline-block" width={9} height={1} viewBox="0 0 9 1" fill="currentColor"><path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z" /></svg>
                          </span>
                          <input type="text" name="number" defaultValue={1} />
                          <span className="btn-quantity plus-btn">
                            <svg className="d-inline-block" width={9} height={9} viewBox="0 0 9 9" fill="currentColor"><path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z" /></svg>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="tf-cart-item_total" cart-data-title="Total">
                      <div className="cart-total">$18.00</div>
                    </td>
                  </tr>
                  <tr className="tf-cart-item file-delete">
                    <td className="tf-cart-item_product">
                      <a href="product-detail.html" className="img-box">
                        <img src="images/products/orange-1.jpg" alt="img-product" />
                      </a>
                      <div className="cart-info">
                        <a href="product-detail.html" className="cart-title link">Ribbed Tank Top</a>
                        <div className="cart-meta-variant">Orange / S</div>
                        <span className="remove-cart link remove">Remove</span>
                      </div>
                    </td>
                    <td className="tf-cart-item_price" cart-data-title="Price">
                      <div className="cart-price">$18.00</div>
                    </td>
                    <td className="tf-cart-item_quantity" cart-data-title="Quantity">
                      <div className="cart-quantity">
                        <div className="wg-quantity">
                          <span className="btn-quantity minus-btn">
                            <svg className="d-inline-block" width={9} height={1} viewBox="0 0 9 1" fill="currentColor"><path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z" /></svg>
                          </span>
                          <input type="text" name="number" defaultValue={1} />
                          <span className="btn-quantity plus-btn">
                            <svg className="d-inline-block" width={9} height={9} viewBox="0 0 9 9" fill="currentColor"><path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z" /></svg>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="tf-cart-item_total" cart-data-title="Total">
                      <div className="cart-total">$18.00</div>
                    </td>
                  </tr>
                  <tr className="tf-cart-item file-delete">
                    <td className="tf-cart-item_product">
                      <a href="product-detail.html" className="img-box">
                        <img src="images/products/black-4.jpg" alt="img-product" />
                      </a>
                      <div className="cart-info">
                        <a href="product-detail.html" className="cart-title link">Regular Fit Oxford Shirt</a>
                        <div className="cart-meta-variant">Black / L</div>
                        <span className="remove-cart link remove">Remove</span>
                      </div>
                    </td>
                    <td className="tf-cart-item_price" cart-data-title="Price">
                      <div className="cart-price">$18.00</div>
                    </td>
                    <td className="tf-cart-item_quantity" cart-data-title="Quantity">
                      <div className="cart-quantity">
                        <div className="wg-quantity">
                          <span className="btn-quantity minus-btn">
                            <svg className="d-inline-block" width={9} height={1} viewBox="0 0 9 1" fill="currentColor"><path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z" /></svg>
                          </span>
                          <input type="text" name="number" defaultValue={1} />
                          <span className="btn-quantity plus-btn">
                            <svg className="d-inline-block" width={9} height={9} viewBox="0 0 9 9" fill="currentColor"><path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z" /></svg>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="tf-cart-item_total" cart-data-title="Total">
                      <div className="cart-total">$18.00</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="tf-page-cart-note">
                <label htmlFor="cart-note">Add Order Note</label>
                <textarea name="note" id="cart-note" placeholder="How can we help you?" defaultValue={""} />
              </div>
            </form>
          </div>
          <div className="tf-page-cart-footer">
            <div className="tf-cart-footer-inner">
              <div className="tf-free-shipping-bar">
                <div className="tf-progress-bar">
                  <span style={{width: '50%'}}>
                    <div className="progress-car">
                      <svg xmlns="http://www.w3.org/2000/svg" width={21} height={14} viewBox="0 0 21 14" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z" />
                      </svg>
                    </div>
                  </span>
                </div>
                <div className="tf-progress-msg">
                  Buy <span className="price fw-6">$75.00</span> more to enjoy <span className="fw-6">Free Shipping</span>
                </div>
              </div>
              <div className="tf-page-cart-checkout">
                <div className="shipping-calculator">
                  <summary className="accordion-shipping-header d-flex justify-content-between align-items-center collapsed" data-bs-target="#shipping" data-bs-toggle="collapse" aria-controls="shipping">
                    <h3 className="shipping-calculator-title">Estimate Shipping</h3>
                    <span className="shipping-calculator_accordion-icon" />
                  </summary>
                  <div className="collapse" id="shipping">
                    <div className="accordion-shipping-content">
                      <fieldset className="field">
                        <label className="label">Country</label>
                        <select className="tf-select w-100" id="ShippingCountry_CartDrawer-Form" name="address[country]" data-default>
                          <option value="---" data-provinces="[]">---</option>
                          <option value="Australia" data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]">Australia</option>
                          <option value="Austria" data-provinces="[]">Austria</option>
                          <option value="Belgium" data-provinces="[]">Belgium</option>
                          <option value="Canada" data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]">Canada</option>
                          <option value="Czech Republic" data-provinces="[]">Czechia</option>
                          <option value="Denmark" data-provinces="[]">Denmark</option>
                          <option value="Finland" data-provinces="[]">Finland</option>
                          <option value="France" data-provinces="[]">France</option>
                          <option value="Germany" data-provinces="[]">Germany</option>
                          <option value="Hong Kong" data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]">Hong Kong SAR</option>
                          <option value="Ireland" data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]">Ireland</option>
                          <option value="Israel" data-provinces="[]">Israel</option>
                          <option value="Italy" data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]">Italy</option>
                          <option value="Japan" data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]">Japan</option>
                          <option value="Malaysia" data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]">Malaysia</option>
                          <option value="Netherlands" data-provinces="[]">Netherlands</option>
                          <option value="New Zealand" data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]">New Zealand</option>
                          <option value="Norway" data-provinces="[]">Norway</option>
                          <option value="Poland" data-provinces="[]">Poland</option>
                          <option value="Portugal" data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]">Portugal</option>
                          <option value="Singapore" data-provinces="[]">Singapore</option>
                          <option value="South Korea" data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]">South Korea</option>
                          <option value="Spain" data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['Málaga','Málaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Seville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valencia'],['Valladolid','Valladolid'],['Vizcaya','Biscay'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['Álava','Álava'],['Ávila','Ávila']]">Spain</option>
                          <option value="Sweden" data-provinces="[]">Sweden</option>
                          <option value="Switzerland" data-provinces="[]">Switzerland</option>
                          <option value="United Arab Emirates" data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]">United Arab Emirates</option>
                          <option value="United Kingdom" data-provinces="[['British Forces','British Forces'],['England','England'],['Northern Ireland','Northern Ireland'],['Scotland','Scotland'],['Wales','Wales']]">United Kingdom</option>
                          <option value="United States" data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','American Samoa'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Armed Forces Americas'],['Armed Forces Europe','Armed Forces Europe'],['Armed Forces Pacific','Armed Forces Pacific'],['California','California'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronesia'],['Florida','Florida'],['Georgia','Georgia'],['Guam','Guam'],['Hawaii','Hawaii'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiana'],['Maine','Maine'],['Marshall Islands','Marshall Islands'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','New Mexico'],['New York','New York'],['North Carolina','North Carolina'],['North Dakota','North Dakota'],['Northern Mariana Islands','Northern Mariana Islands'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvania'],['Puerto Rico','Puerto Rico'],['Rhode Island','Rhode Island'],['South Carolina','South Carolina'],['South Dakota','South Dakota'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','U.S. Virgin Islands'],['Virginia','Virginia'],['Washington','Washington'],['West Virginia','West Virginia'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]">United States</option>
                          <option value="Vietnam" data-provinces="[]">Vietnam</option>
                        </select>
                      </fieldset>
                      <fieldset className="field">
                        <label className="label">Zip code</label>
                        <input type="text" name="text" placeholder='Zip code'/>
                      </fieldset>
                      <button className="tf-btn btn-fill animate-hover-btn radius-3 justify-content-center">
                        <span>Estimate</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cart-checkbox">
                  <input type="checkbox" className="tf-check" id="cart-gift-checkbox" />
                  <label htmlFor="cart-gift-checkbox" className="fw-4">
                    <span>Do you want a gift wrap?</span> Only <span className="fw-5">$5.00</span>
                  </label>
                </div>
                <div className="tf-cart-totals-discounts">
                  <h3>Subtotal</h3>
                  <span className="total-value">$18.00 USD</span>
                </div>
                <p className="tf-cart-tax">
                  Taxes and <a href="shipping-delivery.html">shipping</a>  calculated at checkout
                </p>
                <div className="cart-checkbox">
                  <input type="checkbox" className="tf-check" id="check-agree" />
                  <label htmlFor="check-agree" className="fw-4">
                    I agree with the <a href="terms-conditions.html">terms and conditions</a>
                  </label>
                </div>
                <div className="cart-checkout-btn">
                  <a href="checkout.html" className="tf-btn w-100 btn-fill animate-hover-btn radius-3 justify-content-center">
                    <span>Check out</span>
                  </a>
                </div>
                <div className="tf-page-cart_imgtrust">
                  <p className="text-center fw-6">Guarantee Safe Checkout</p>
                  <div className="cart-list-social">
                    <div className="payment-item">
                      <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688" /></svg>
                    </div>
                    <div className="payment-item">
                      <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width={38} height={24} role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z" /><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z" /><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z" /></svg>
                    </div>
                    <div className="payment-item">
                      <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><circle fill="#EB001B" cx={15} cy={12} r={7} /><circle fill="#F79E1B" cx={23} cy={12} r={7} /><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" /></svg>
                    </div>
                    <div className="payment-item">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width={38} height={24}><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07" /><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" /><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z" /><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z" /><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z" /><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z" /><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z" /><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z" /></svg>
                    </div>
                    <div className="payment-item">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width={38} height={24} aria-labelledby="pi-amazon"><title id="pi-amazon">Amazon</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" fillRule="nonzero" opacity=".07" /><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF" fillRule="nonzero" /><path d="M25.26 16.23c-1.697 1.48-4.157 2.27-6.275 2.27-2.97 0-5.644-1.3-7.666-3.463-.16-.17-.018-.402.173-.27 2.183 1.504 4.882 2.408 7.67 2.408 1.88 0 3.95-.46 5.85-1.416.288-.145.53.222.248.47v.001zm.706-.957c-.216-.328-1.434-.155-1.98-.078-.167.024-.193-.148-.043-.27.97-.81 2.562-.576 2.748-.305.187.272-.047 2.16-.96 3.063-.14.138-.272.064-.21-.12.205-.604.664-1.96.446-2.29h-.001z" fill="#F90" fillRule="nonzero" /><path d="M21.814 15.291c-.574-.498-.676-.73-.993-1.205-.947 1.012-1.618 1.315-2.85 1.315-1.453 0-2.587-.938-2.587-2.818 0-1.467.762-2.467 1.844-2.955.94-.433 2.25-.51 3.25-.628v-.235c0-.43.033-.94-.208-1.31-.212-.333-.616-.47-.97-.47-.66 0-1.25.353-1.392 1.085-.03.163-.144.323-.3.33l-1.677-.187c-.14-.033-.296-.153-.257-.38.386-2.125 2.223-2.766 3.867-2.766.84 0 1.94.234 2.604.9.842.82.762 1.918.762 3.11v2.818c0 .847.335 1.22.65 1.676.113.164.138.36-.003.482-.353.308-.98.88-1.326 1.2a.367.367 0 0 1-.414.038zm-1.659-2.533c.34-.626.323-1.214.323-1.918v-.392c-1.25 0-2.57.28-2.57 1.82 0 .782.386 1.31 1.05 1.31.487 0 .922-.312 1.197-.82z" fill="#221F1F" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* page-cart */}
    {/* Testimonial */}
    <section className="flat-spacing-17 pt_0 flat-testimonial">
      <div className="container">
        <div className="flat-title">
          <span className="title">Happy Clients</span>
        </div>
        <div className="wrap-carousel">
          <div className="swiper tf-sw-testimonial" data-preview={3} data-tablet={2} data-mobile={1} data-space-lg={30} data-space-md={15}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item style-column">
                  <div className="rating">
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                  </div>
                  <div className="heading">Best Online Fashion Site</div>
                  <div className="text">
                    “ I always find something stylish and affordable on this web fashion site ”
                  </div>
                  <div className="author">
                    <div className="name">Robert smith</div>
                    <div className="metas">Customer from USA</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="product-detail.html">
                        <img className="lazyload" data-src="images/shop/products/img-p2.png" src="images/shop/products/img-p2.png"/>
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="product-detail.html">Jersey thong body</a>
                      </div>
                      <div className="price">$105.95</div>
                    </div>
                    <a href="product-detail.html" className=""><i className="icon-arrow1-top-left" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item style-column">
                  <div className="rating">
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                  </div>
                  <div className="heading">Great Selection and Quality</div>
                  <div className="text">
                    "I love the variety of styles and the high-quality clothing on this web fashion site."
                  </div>
                  <div className="author">
                    <div className="name">Allen Lyn</div>
                    <div className="metas">Customer from France</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="product-detail.html">
                        <img className="lazyload" data-src="images/shop/products/img-p3.png" src="images/shop/products/img-p3.png"/>
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="product-detail.html">Cotton jersey top</a>
                      </div>
                      <div className="price">$7.95</div>
                    </div>
                    <a href="product-detail.html" className=""><i className="icon-arrow1-top-left" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item style-column">
                  <div className="rating">
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                  </div>
                  <div className="heading">Best Customer Service</div>
                  <div className="text">
                    "I finally found a web fashion site with stylish and flattering options in my size."
                  </div>
                  <div className="author">
                    <div className="name">Peter Rope</div>
                    <div className="metas">Customer from USA</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="product-detail.html">
                        <img className="lazyload" data-src="images/shop/products/img-p4.png" src="images/shop/products/img-p4.png"/>
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="product-detail.html">Ribbed modal T-shirt</a>
                      </div>
                      <div className="price">From $18.95</div>
                    </div>
                    <a href="product-detail.html" className=""><i className="icon-arrow1-top-left" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item style-column">
                  <div className="rating">
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                  </div>
                  <div className="heading">Great Selection and Quality</div>
                  <div className="text">
                    "I love the variety of styles and the high-quality clothing on this web fashion site."
                  </div>
                  <div className="author">
                    <div className="name">Hellen Ase</div>
                    <div className="metas">Customer from Japan</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="product-detail.html">
                        <img className="lazyload" data-src="images/shop/products/img-p5.png" src="images/shop/products/img-p5.png"/>
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="product-detail.html">Customer from Japan</a>
                      </div>
                      <div className="price">$16.95</div>
                    </div>
                    <a href="product-detail.html" className=""><i className="icon-arrow1-top-left" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg"><span className="icon icon-arrow-left" /></div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg"><span className="icon icon-arrow-right" /></div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center" />
        </div>
      </div>
    </section>
    {/* /Testimonial */}
    {/* product */}
    <section className="flat-spacing-17 pt_0">
      <div className="container">
        <div className="flat-title">
          <span className="title">You may also like</span>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <div className="swiper tf-sw-product-sell wrap-sw-over" data-preview={4} data-tablet={3} data-mobile={2} data-space-lg={30} data-space-md={15} data-pagination={2} data-pagination-md={3} data-pagination-lg={3}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img className="lazyload img-product" data-src="images/products/orange-1.jpg" src="images/products/orange-1.jpg" alt="image-product" />
                      <img className="lazyload img-hover" data-src="images/products/white-1.jpg" src="images/products/white-1.jpg" alt="image-product" />
                    </a>
                    <div className="list-product-btn">
                      <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="size-list">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                    <span className="price">$16.95</span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="tooltip">Orange</span>
                        <span className="swatch-value bg_orange-3" />
                        <img className="lazyload" data-src="images/products/orange-1.jpg" src="images/products/orange-1.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Black</span>
                        <span className="swatch-value bg_dark" />
                        <img className="lazyload" data-src="images/products/black-1.jpg" src="images/products/black-1.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">White</span>
                        <span className="swatch-value bg_white" />
                        <img className="lazyload" data-src="images/products/white-1.jpg" src="images/products/white-1.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img className="lazyload img-product" data-src="images/products/brown.jpg" src="images/products/brown.jpg" alt="image-product" />
                      <img className="lazyload img-hover" data-src="images/products/purple.jpg" src="images/products/purple.jpg" alt="image-product" />
                    </a>
                    <div className="list-product-btn">
                      <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="size-list">
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                    <div className="on-sale-wrap">
                      <div className="on-sale-item">-33%</div>
                    </div>
                    <div className="countdown-box">
                      <div className="js-countdown" data-timer={1007500} data-labels="d :,h :,m :,s" />
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">Ribbed modal T-shirt</a>
                    <span className="price">From $18.95</span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="tooltip">Brown</span>
                        <span className="swatch-value bg_brown" />
                        <img className="lazyload" data-src="images/products/brown.jpg" src="images/products/brown.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Light Purple</span>
                        <span className="swatch-value bg_purple" />
                        <img className="lazyload" data-src="images/products/purple.jpg" src="images/products/purple.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Light Green</span>
                        <span className="swatch-value bg_light-green" />
                        <img className="lazyload" data-src="images/products/green.jpg" src="images/products/green.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img className="lazyload img-product" data-src="images/products/white-3.jpg" src="images/products/white-3.jpg" alt="image-product" />
                      <img className="lazyload img-hover" data-src="images/products/white-4.jpg" src="images/products/white-4.jpg" alt="image-product" />
                    </a>
                    <div className="list-product-btn">
                      <a href="#shoppingCart" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                        <span className="icon icon-bag" />
                        <span className="tooltip">Add to cart</span>
                      </a>
                      <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="size-list">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">Oversized Printed T-shirt</a>
                    <span className="price">$10.00</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img className="lazyload img-product" data-src="images/products/white-2.jpg" src="images/products/white-2.jpg" alt="image-product" />
                      <img className="lazyload img-hover" data-src="images/products/pink-1.jpg" src="images/products/pink-1.jpg" alt="image-product" />
                    </a>
                    <div className="list-product-btn">
                      <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="size-list">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title">Oversized Printed T-shirt</a>
                    <span className="price">$16.95</span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="tooltip">White</span>
                        <span className="swatch-value bg_white" />
                        <img className="lazyload" data-src="images/products/white-2.jpg" src="images/products/white-2.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Pink</span>
                        <span className="swatch-value bg_purple" />
                        <img className="lazyload" data-src="images/products/pink-1.jpg" src="images/products/pink-1.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Black</span>
                        <span className="swatch-value bg_dark" />
                        <img className="lazyload" data-src="images/products/black-2.jpg" src="images/products/black-2.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img className="lazyload img-product" data-src="images/products/brown-2.jpg" src="images/products/brown-2.jpg" alt="image-product" />
                      <img className="lazyload img-hover" data-src="images/products/brown-3.jpg" src="images/products/brown-3.jpg" alt="image-product" />
                    </a>
                    <div className="size-list">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                    <div className="list-product-btn">
                      <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">V-neck linen T-shirt</a>
                    <span className="price">$114.95</span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="tooltip">Brown</span>
                        <span className="swatch-value bg_brown" />
                        <img className="lazyload" data-src="images/products/brown-2.jpg" src="images/products/brown-2.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">White</span>
                        <span className="swatch-value bg_white" />
                        <img className="lazyload" data-src="images/products/white-5.jpg" src="images/products/white-5.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-product">
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="product-img">
                      <img className="lazyload img-product" data-src="images/products/light-green-1.jpg" src="images/products/light-green-1.jpg" alt="image-product" />
                      <img className="lazyload img-hover" data-src="images/products/light-green-2.jpg" src="images/products/light-green-2.jpg" alt="image-product" />
                    </a>
                    <div className="list-product-btn absolute-2">
                      <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="product-detail.html" className="title link">Loose Fit Sweatshirt</a>
                    <span className="price">$10.00</span>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="tooltip">Light Green</span>
                        <span className="swatch-value bg_light-green" />
                        <img className="lazyload" data-src="images/products/light-green-1.jpg" src="images/products/light-green-1.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Black</span>
                        <span className="swatch-value bg_dark" />
                        <img className="lazyload" data-src="images/products/black-3.jpg" src="images/products/black-3.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Blue</span>
                        <span className="swatch-value bg_blue-2" />
                        <img className="lazyload" data-src="images/products/blue.jpg" src="images/products/blue.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Dark Blue</span>
                        <span className="swatch-value bg_dark-blue" />
                        <img className="lazyload" data-src="images/products/dark-blue.jpg" src="images/products/dark-blue.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">White</span>
                        <span className="swatch-value bg_white" />
                        <img className="lazyload" data-src="images/products/white-6.jpg" src="images/products/white-6.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="tooltip">Light Grey</span>
                        <span className="swatch-value bg_light-grey" />
                        <img className="lazyload" data-src="images/products/light-grey.jpg" src="images/products/light-grey.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round"><span className="icon icon-arrow-left" /></div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round"><span className="icon icon-arrow-right" /></div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center" />
        </div>
      </div>
    </section>
    {/* /product */}
    <Footer />
  </div>
  {/* gotop */}
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '286.138'}} />
    </svg>
  </div>
  {/* /gotop */}
  {/* toolbar-bottom */}
  <div className="tf-toolbar-bottom type-1150">
    <div className="toolbar-item">
      <a href="#toolbarShopmb" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
        <div className="toolbar-icon">
          <i className="icon-shop" />
        </div>
        <div className="toolbar-label">Shop</div>
      </a>
    </div>
    <div className="toolbar-item">
      <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
        <div className="toolbar-icon">
          <i className="icon-search" />
        </div>
        <div className="toolbar-label">Search</div>
      </a>
    </div>
    <div className="toolbar-item">
      <a href="#login" data-bs-toggle="modal">
        <div className="toolbar-icon">
          <i className="icon-account" />
        </div>
        <div className="toolbar-label">Account</div>
      </a>
    </div>
    <div className="toolbar-item">
      <a href="wishlist.html">
        <div className="toolbar-icon">
          <i className="icon-heart" />
          <div className="toolbar-count">0</div>
        </div>
        <div className="toolbar-label">Wishlist</div>
      </a>
    </div>
    <div className="toolbar-item">
      <a href="#shoppingCart" data-bs-toggle="modal">
        <div className="toolbar-icon">
          <i className="icon-bag" />
          <div className="toolbar-count">1</div>
        </div>
        <div className="toolbar-label">Cart</div>
      </a>
    </div>
  </div>
  {/* /toolbar-bottom */}
  {/* modalDemo */}
  <div className="modal fade modalDemo" id="modalDemo">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <h5 className="demo-title">Ultimate HTML Theme</h5>
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="mega-menu">
          <div className="row-demo">
            <div className="demo-item">
              <a href="index.html">
                <div className="demo-image position-relative">
                  <img className="lazyload" data-src="images/demo/home-01.jpg" src="images/demo/home-01.jpg" alt="home-01" />
                  <div className="demo-label">
                    <span className="demo-new">New</span>
                    <span>Trend</span>
                  </div>
                </div>
                <span className="demo-name">Home Fashion 01</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-multi-brand.html">
                <div className="demo-image position-relative">
                  <img className="lazyload" data-src="images/demo/home-multi-brand.jpg" src="images/demo/home-multi-brand.jpg" alt="home-multi-brand" />
                  <div className="demo-label">
                    <span className="demo-new">New</span>
                    <span className="demo-hot">Hot</span>
                  </div>
                </div>
                <span className="demo-name">Home Multi Brand</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-02.html">
                <div className="demo-image position-relative">
                  <img className="lazyload" data-src="images/demo/home-02.jpg" src="images/demo/home-02.jpg" alt="home-02" />
                  <div className="demo-label">
                    <span className="demo-hot">Hot</span>
                  </div>
                </div>
                <span className="demo-name">Home Fashion 02</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-03.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-03.jpg" src="images/demo/home-03.jpg" alt="home-03" />
                </div>
                <span className="demo-name">Home Fashion 03</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-04.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-04.jpg" src="images/demo/home-04.jpg" alt="home-04" />
                </div>
                <span className="demo-name">Home Fashion 04</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-05.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-05.jpg" src="images/demo/home-05.jpg" alt="home-05" />
                </div>
                <span className="demo-name">Home Fashion 05</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-06.html">
                <div className="demo-image position-relative">
                  <img className="lazyload" data-src="images/demo/home-06.jpg" src="images/demo/home-06.jpg" alt="home-06" />
                  <div className="demo-label">
                    <span className="demo-new">New</span>
                  </div>
                </div>
                <span className="demo-name">Home Fashion 06</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-07.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-07.jpg" src="images/demo/home-07.jpg" alt="home-07" />
                </div>
                <span className="demo-name">Home Fashion 07</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-08.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-08.jpg" src="images/demo/home-08.jpg" alt="home-08" />
                </div>
                <span className="demo-name">Home Fashion 08</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-skincare.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-skincare.jpg" src="images/demo/home-skincare.jpg" alt="home-skincare" />
                </div>
                <span className="demo-name">Home Skincare</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-headphone.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-headphone.jpg" src="images/demo/home-headphone.jpg" alt="home-headphone" />
                </div>
                <span className="demo-name">Home Headphone</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-giftcard.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-giftcard.jpg" src="images/demo/home-giftcard.jpg" alt="home-gift-card" />
                </div>
                <span className="demo-name">Home Gift Card</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-furniture.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-furniture.jpg" src="images/demo/home-furniture.jpg" alt="home-furniture" />
                </div>
                <span className="demo-name">Home Furniture</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-furniture-02.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-furniture2.jpg" src="images/demo/home-furniture2.jpg" alt="home-furniture-2" />
                </div>
                <span className="demo-name">Home Furniture 2</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-skateboard.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-skateboard.jpg" src="images/demo/home-skateboard.jpg" alt="home-skateboard" />
                </div>
                <span className="demo-name">Home Skateboard</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-stroller.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-stroller.jpg" src="images/demo/home-stroller.jpg" alt="home-stroller" />
                </div>
                <span className="demo-name">Home Stroller</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-decor.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-decor.jpg" src="images/demo/home-decor.jpg" alt="home-decor" />
                </div>
                <span className="demo-name">Home Decor</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-electronic.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-electronic.jpg" src="images/demo/home-electronic.jpg" alt="home-electronic" />
                </div>
                <span className="demo-name">Home Electronic</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-setup-gear.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-setup-gear.jpg" src="images/demo/home-setup-gear.jpg" alt="home-setup-gear" />
                </div>
                <span className="demo-name">Home Setup Gear</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-dog-accessories.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-dog-accessories.jpg" src="images/demo/home-dog-accessories.jpg" alt="home-dog-accessories" />
                </div>
                <span className="demo-name">Home Dog Accessories</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-kitchen-wear.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-kitchen.jpg" src="images/demo/home-kitchen.jpg" alt="home-kitchen-wear" />
                </div>
                <span className="demo-name">Home Kitchen Wear</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-phonecase.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-phonecase.jpg" src="images/demo/home-phonecase.jpg" alt="home-phonecase" />
                </div>
                <span className="demo-name">Home Phonecase</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-paddle-boards.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home_paddle_board.jpg" src="images/demo/home_paddle_board.jpg" alt="home-paddle_board" />
                </div>
                <span className="demo-name">Home Paddle Boards</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-glasses.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-glasses.jpg" src="images/demo/home-glasses.jpg" alt="home-glasses" />
                </div>
                <span className="demo-name">Home Glasses</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-pod-store.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-pod-store.jpg" src="images/demo/home-pod-store.jpg" alt="home-pod-store" />
                </div>
                <span className="demo-name">Home POD Store</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-activewear.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-activewear.jpg" src="images/demo/home-activewear.jpg" alt="home-activewear" />
                </div>
                <span className="demo-name">Activewear</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-handbag.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-handbag.jpg" src="images/demo/home-handbag.jpg" alt="home-handbag" />
                </div>
                <span className="demo-name">Home Handbag</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-tee.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-tee.jpg" src="images/demo/home-tee.jpg" alt="home-tee" />
                </div>
                <span className="demo-name">Home Tee</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-sock.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-socks.jpg" src="images/demo/home-socks.jpg" alt="home-sock" />
                </div>
                <span className="demo-name">Home Sock</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-jewerly.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-jewelry.jpg" src="images/demo/home-jewelry.jpg" alt="home-jewelry" />
                </div>
                <span className="demo-name">Home Jewelry</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-sneaker.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-sneaker.jpg" src="images/demo/home-sneaker.jpg" alt="home-sneaker" />
                </div>
                <span className="demo-name">Home Sneaker</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-accessories.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-accessories.jpg" src="images/demo/home-accessories.jpg" alt="home-accessories" />
                </div>
                <span className="demo-name">Home Accessories</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-grocery.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-gocery.jpg" src="images/demo/home-gocery.jpg" alt="home-grocery" />
                </div>
                <span className="demo-name">Home Grocery</span>
              </a>
            </div>
            <div className="demo-item">
              <a href="home-baby.html">
                <div className="demo-image">
                  <img className="lazyload" data-src="images/demo/home-baby.jpg" src="images/demo/home-baby.jpg" alt="home-baby" />
                </div>
                <span className="demo-name">Home Baby</span>
              </a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
  {/* /modalDemo */}
  {/* mobile menu */}
  <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
    <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close" />
    <div className="mb-canvas-content">
      <div className="mb-body">
        <ul className="nav-ul-mb" id="wrapper-menu-navigation">
          <li className="nav-mb-item">
            <a href="#dropdown-menu-one" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
              <span>Home</span>
              <span className="btn-open-sub" />
            </a>
            <div id="dropdown-menu-one" className="collapse">
              <ul className="sub-nav-menu">
                <li><a href="index.html" className="sub-nav-link">Home Fashion 01</a></li>
                <li><a href="home-02.html" className="sub-nav-link">Home Fashion 02</a></li>
                <li><a href="home-03.html" className="sub-nav-link">Home Fashion 03</a></li>
                <li><a href="home-04.html" className="sub-nav-link">Home Fashion 04</a></li>
                <li><a href="home-05.html" className="sub-nav-link">Home Fashion 05</a></li>
                <li><a href="home-06.html" className="sub-nav-link">Home Fashion 06</a></li>
                <li><a href="home-07.html" className="sub-nav-link">Home Fashion 07</a></li>
                <li><a href="home-08.html" className="sub-nav-link">Home Fashion 08</a></li>
                <li><a href="home-giftcard.html" className="sub-nav-link">Home Gift Card</a></li>
                <li><a href="home-headphone.html" className="sub-nav-link">Home Headphone</a></li>
                <li><a href="home-multi-brand.html" className="sub-nav-link">Home Multi Brand</a></li>
                <li><a href="home-skincare.html" className="sub-nav-link">Home skincare</a></li>
                <li><a href="home-headphone.html" className="sub-nav-link">Home Headphone</a></li>
                <li><a href="home-giftcard.html" className="sub-nav-link">Home Gift Card</a></li>
                <li><a href="home-furniture.html" className="sub-nav-link">Home Furniture</a></li>
                <li><a href="home-furniture-02.html" className="sub-nav-link">Home Furniture 2</a></li>
                <li><a href="home-skateboard.html" className="sub-nav-link">Home Skateboard</a></li>
                <li><a href="home-stroller.html" className="sub-nav-link">Home Stroller</a></li>
                <li><a href="home-decor.html" className="sub-nav-link">Home Decor</a></li>
                <li><a href="home-electronic.html" className="sub-nav-link">Home Electronic</a></li>
                <li><a href="home-setup-gear.html" className="sub-nav-link">Home Setup Gear</a></li>
                <li><a href="home-dog-accessories.html" className="sub-nav-link">Home Dog Accessories</a></li>
                <li><a href="home-kitchen-wear.html" className="sub-nav-link">Home Kitchen Wear</a></li>
                <li><a href="home-phonecase.html" className="sub-nav-link">Home Phonecase</a></li>
                <li><a href="home-paddle-boards.html" className="sub-nav-link">Home Paddle Boards</a></li>
                <li><a href="home-glasses.html" className="sub-nav-link">Home Glasses</a></li>
                <li><a href="home-pod-store.html" className="sub-nav-link">Home POD Store</a></li>
                <li><a href="home-activewear.html" className="sub-nav-link">Home Activewear</a></li>
                <li><a href="home-handbag.html" className="sub-nav-link">Home Handbag</a></li>
                <li><a href="home-tee.html" className="sub-nav-link">Home Tee</a></li>
                <li><a href="home-sock.html" className="sub-nav-link">Home Sock</a></li>
                <li><a href="home-jewerly.html" className="sub-nav-link">Home Jewelry</a></li>
                <li><a href="home-sneaker.html" className="sub-nav-link">Home Sneaker</a></li>
                <li><a href="home-accessories.html" className="sub-nav-link">Home Accessories</a></li>
                <li><a href="home-grocery.html" className="sub-nav-link">Home Grocery</a></li>
                <li><a href="home-baby.html" className="sub-nav-link">Home Baby</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="#dropdown-menu-two" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-two">
              <span>Shop</span>
              <span className="btn-open-sub" />
            </a>
            <div id="dropdown-menu-two" className="collapse">
              <ul className="sub-nav-menu" id="sub-menu-navigation">
                <li><a href="#sub-shop-one" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-one">
                    <span>Shop layouts</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-shop-one" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="shop-default.html" className="sub-nav-link">Default</a></li>
                      <li><a href="shop-left-sidebar.html" className="sub-nav-link">Left sidebar</a></li>
                      <li><a href="shop-right-sidebar.html" className="sub-nav-link">Right sidebar</a></li>
                      <li><a href="shop-fullwidth.html" className="sub-nav-link">Fullwidth</a></li>
                      <li><a href="shop-collection-sub.html" className="sub-nav-link">Sub collection</a></li>
                      <li><a href="shop-collection-list.html" className="sub-nav-link">Collections list</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#sub-shop-two" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-two">
                    <span>Features</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-shop-two" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="shop-link.html" className="sub-nav-link">Pagination links</a></li>
                      <li><a href="shop-loadmore.html" className="sub-nav-link">Pagination loadmore</a></li>
                      <li><a href="shop-infinite-scrolling.html" className="sub-nav-link">Pagination infinite scrolling</a></li>
                      <li><a href="shop-filter-sidebar.html" className="sub-nav-link">Filter sidebar</a></li>
                      <li><a href="shop-filter-hidden.html" className="sub-nav-link">Filter hidden</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#sub-shop-three" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-three">
                    <span>Product styles</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-shop-three" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="product-style-list.html" className="sub-nav-link">Product style list</a></li>
                      <li><a href="product-style-01.html" className="sub-nav-link">Product style 01</a></li>
                      <li><a href="product-style-02.html" className="sub-nav-link">Product style 02</a></li>
                      <li><a href="product-style-03.html" className="sub-nav-link">Product style 03</a></li>
                      <li><a href="product-style-04.html" className="sub-nav-link">Product style 04</a></li>
                      <li><a href="product-style-05.html" className="sub-nav-link">Product style 05</a></li>
                      <li><a href="product-style-06.html" className="sub-nav-link">Product style 06</a></li>
                      <li><a href="product-style-07.html" className="sub-nav-link">Product style 07</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="#dropdown-menu-three" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-three">
              <span>Products</span>
              <span className="btn-open-sub" />
            </a>
            <div id="dropdown-menu-three" className="collapse">
              <ul className="sub-nav-menu" id="sub-menu-navigation">
                <li>
                  <a href="#sub-product-one" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-product-one">
                    <span>Product layouts</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-product-one" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="product-detail.html" className="sub-nav-link">Product default</a></li>
                      <li><a href="product-grid-1.html" className="sub-nav-link">Product grid 1</a></li>
                      <li><a href="product-grid-2.html" className="sub-nav-link">Product grid 2</a></li>
                      <li><a href="product-stacked.html" className="sub-nav-link">Product stacked</a></li>
                      <li><a href="product-right-thumbnails.html" className="sub-nav-link">Product right thumbnails</a></li>
                      <li><a href="product-bottom-thumbnails.html" className="sub-nav-link">Product bottom thumbnails</a></li>
                      <li><a href="product-drawer-sidebar.html" className="sub-nav-link">Product drawer sidebar</a></li>
                      <li><a href="product-description-accordion.html" className="sub-nav-link">Product description accordion</a></li>
                      <li><a href="product-description-list.html" className="sub-nav-link">Product description list</a></li>
                      <li><a href="product-description-vertical.html" className="sub-nav-link">Product description vertical</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#sub-product-two" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-product-two">
                    <span>Product details</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-product-two" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="product-inner-zoom.html" className="sub-nav-link">Product inner zoom</a></li>
                      <li><a href="product-zoom-magnifier.html" className="sub-nav-link">Product zoom magnifier</a></li>
                      <li><a href="product-no-zoom.html" className="sub-nav-link">Product no zoom</a></li>
                      <li><a href="product-photoswipe-popup.html" className="sub-nav-link">Product photoswipe popup</a></li>
                      <li><a href="product-zoom-popup.html" className="sub-nav-link">Product external zoom and photoswipe popup</a></li>
                      <li><a href="product-video.html" className="sub-nav-link">Product video</a></li>
                      <li><a href="product-3d.html" className="sub-nav-link">Product 3D, AR models</a></li>
                      <li><a href="product-options-customizer.html" className="sub-nav-link">Product options &amp; customizer</a></li>
                      <li><a href="product-advanced-types.html" className="sub-nav-link">Advanced product types</a></li>
                      <li><a href="product-giftcard.html" className="sub-nav-link">Recipient information form for gift card products</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#sub-product-three" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-product-three">
                    <span>Product swatchs</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-product-three" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="product-color-swatch.html" className="sub-nav-link">Product color swatch</a></li>
                      <li><a href="product-rectangle.html" className="sub-nav-link">Product rectangle</a></li>
                      <li><a href="product-rectangle-color.html" className="sub-nav-link">Product rectangle color</a></li>
                      <li><a href="product-swatch-image.html" className="sub-nav-link">Product swatch image</a></li>
                      <li><a href="product-swatch-image-rounded.html" className="sub-nav-link">Product swatch image rounded</a></li>
                      <li><a href="product-swatch-dropdown.html" className="sub-nav-link">Product swatch dropdown</a></li>
                      <li><a href="product-swatch-dropdown-color.html" className="sub-nav-link">Product swatch dropdown color</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#sub-product-four" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-product-four">
                    <span>Product features</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-product-four" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="product-frequently-bought-together.html" className="sub-nav-link">Frequently bought together</a></li>
                      <li><a href="product-frequently-bought-together-2.html" className="sub-nav-link">Frequently bought together 2</a></li>
                      <li><a href="product-upsell-features.html" className="sub-nav-link">Product upsell features</a></li>
                      <li><a href="product-pre-orders.html" className="sub-nav-link">Product pre-orders</a></li>
                      <li><a href="product-notification.html" className="sub-nav-link">Back in stock notification</a></li>
                      <li><a href="product-pickup.html" className="sub-nav-link">Product pickup</a></li>
                      <li><a href="product-images-grouped.html" className="sub-nav-link">Variant images grouped</a></li>
                      <li><a href="product-complimentary.html" className="sub-nav-link">Complimentary products</a></li>
                      <li><a href="product-quick-order-list.html" className="sub-nav-link line-clamp">Quick order list<div className="demo-label"><span className="demo-new">New</span></div></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="#dropdown-menu-four" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-four">
              <span>Pages</span>
              <span className="btn-open-sub" />
            </a>
            <div id="dropdown-menu-four" className="collapse">
              <ul className="sub-nav-menu" id="sub-menu-navigation">
                <li><a href="about-us.html" className="sub-nav-link">About us</a></li>
                <li><a href="brands.html" className="sub-nav-link line-clamp">Brands<div className="demo-label"><span className="demo-new">New</span></div></a></li>
                <li><a href="brands-v2.html" className="sub-nav-link">Brands V2</a></li>
                <li><a href="contact-1.html" className="sub-nav-link">Contact 1</a></li>
                <li><a href="contact-2.html" className="sub-nav-link">Contact 2</a></li>
                <li><a href="faq-1.html" className="sub-nav-link">FAQ 01</a></li>
                <li><a href="faq-2.html" className="sub-nav-link">FAQ 02</a></li>
                <li><a href="our-store.html" className="sub-nav-link">Our store</a></li>
                <li><a href="store-locations.html" className="sub-nav-link">Store locator</a></li>
                <li><a href="timeline.html" className="sub-nav-link line-clamp">Timeline<div className="demo-label"><span className="demo-new">New</span></div></a></li>
                <li><a href="view-cart.html" className="sub-nav-link line-clamp">View cart</a></li>
                <li><a href="checkout.html" className="sub-nav-link line-clamp">Check out</a></li>
                <li><a href="payment-confirmation.html" className="sub-nav-link line-clamp">Payment Confirmation</a></li>
                <li><a href="payment-failure.html" className="sub-nav-link line-clamp">Payment Failure</a></li>
                <li><a href="#sub-account" className="sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-account">
                    <span>My Account</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="sub-account" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li><a href="my-account.html" className="sub-nav-link">My account</a></li>
                      <li><a href="my-account-orders.html" className="sub-nav-link">My order</a></li>
                      <li><a href="my-account-orders-details.html" className="sub-nav-link">My order details</a></li>
                      <li><a href="my-account-address.html" className="sub-nav-link">My address</a></li>
                      <li><a href="my-account-edit.html" className="sub-nav-link">My account details</a></li>
                      <li><a href="my-account-wishlist.html" className="sub-nav-link">My wishlist</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="invoice.html" className="sub-nav-link line-clamp">Invoice</a></li>
                <li><a href="404.html" className="sub-nav-link line-clamp">404</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="#dropdown-menu-five" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-five">
              <span>Blog</span>
              <span className="btn-open-sub" />
            </a>
            <div id="dropdown-menu-five" className="collapse">
              <ul className="sub-nav-menu">
                <li><a href="blog-grid.html" className="sub-nav-link">Grid layout</a></li>
                <li><a href="blog-sidebar-left.html" className="sub-nav-link">Left sidebar</a></li>
                <li><a href="blog-sidebar-right.html" className="sub-nav-link">Right sidebar</a></li>
                <li><a href="blog-list.html" className="sub-nav-link">Blog list</a></li>
                <li><a href="blog-detail.html" className="sub-nav-link">Single Post</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="mb-menu-link">Buy now</a>
          </li>
        </ul>
        <div className="mb-other-content">
          <div className="d-flex group-icon">
            <a href="wishlist.html" className="site-nav-icon"><i className="icon icon-heart" />Wishlist</a>
            <a href="home-search.html" className="site-nav-icon"><i className="icon icon-search" />Search</a>
          </div>
          <div className="mb-notice">
            <a href="contact-1.html" className="text-need">Need help ?</a>
          </div>
          <ul className="mb-info">
            <li>Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001</li>
            <li>Email: <b>info@fashionshop.com</b></li>
            <li>Phone: <b>(212) 555-1234</b></li>
          </ul>
        </div>
      </div>
      <div className="mb-bottom">
        <a href="login.html" className="site-nav-icon"><i className="icon icon-account" />Login</a>
        <div className="bottom-bar-language">
          <div className="tf-currencies">
            <select className="image-select center style-default type-currencies">
              <option data-thumbnail="images/country/fr.svg">EUR € | France</option>
              <option data-thumbnail="images/country/de.svg">EUR € | Germany</option>
              <option selected data-thumbnail="images/country/us.svg">USD $ | United States</option>
              <option data-thumbnail="images/country/vn.svg">VND ₫ | Vietnam</option>
            </select>
          </div>
          <div className="tf-languages">
            <select className="image-select center style-default type-languages">
              <option>English</option>
              <option>العربية</option>
              <option>简体中文</option>
              <option>اردو</option>
            </select>
          </div>
        </div>
      </div>
    </div>       
  </div>
  {/* /mobile menu */}
  {/* canvasSearch */}
  <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
    <div className="canvas-wrapper">
      <header className="tf-search-head">
        <div className="title fw-5">
          Search our site
          <div className="close">
            <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
        </div>
        <div className="tf-search-sticky">
          <form className="tf-mini-search-frm">
            <fieldset className="text">
              <input type="text" placeholder="Search" className="" name="text" tabIndex={0} defaultValue="" aria-required="true" required />
            </fieldset>
            <button className="" type="submit"><i className="icon-search" /></button>
          </form>
        </div>
      </header>
      <div className="canvas-body p-0">
        <div className="tf-search-content">
          <div className="tf-cart-hide-has-results">
            <div className="tf-col-quicklink">
              <div className="tf-search-content-title fw-5">Quick link</div>
              <ul className="tf-quicklink-list">
                <li className="tf-quicklink-item">
                  <a href="shop-default.html" className ="">Fashion</a>
                </li>
                <li className="tf-quicklink-item">
                  <a href="shop-default.html" className ="">Men</a>
                </li>
                <li className="tf-quicklink-item">
                  <a href="shop-default.html" className ="">Women</a>
                </li>
                <li className="tf-quicklink-item">
                  <a href="shop-default.html" className ="">Accessories</a>
                </li>
              </ul>
            </div>
            <div className="tf-col-content">
              <div className="tf-search-content-title fw-5">Need some inspiration?</div>
              <div className="tf-search-hidden-inner">
                <div className="tf-loop-item">
                  <div className="image">
                    <a href="product-detail.html">
                      <img src="images/products/white-3.jpg"/>
                    </a>
                  </div>
                  <div className="content">
                    <a href="product-detail.html">Cotton jersey top</a>
                    <div className="tf-product-info-price">
                      <div className="compare-at-price">$10.00</div>
                      <div className="price-on-sale fw-6">$8.00</div>
                    </div>
                  </div>
                </div>
                <div className="tf-loop-item">
                  <div className="image">
                    <a href="product-detail.html">
                      <img src="images/products/white-2.jpg"/>
                    </a>
                  </div>
                  <div className="content">
                    <a href="product-detail.html">Mini crossbody bag</a>
                    <div className="tf-product-info-price">
                      <div className="price fw-6">$18.00</div>
                    </div>
                  </div>
                </div>
                <div className="tf-loop-item">
                  <div className="image">
                    <a href="product-detail.html">
                      <img src="images/products/white-1.jpg"/>
                    </a>
                  </div>
                  <div className="content">
                    <a href="product-detail.html">Oversized Printed T-shirt</a>
                    <div className="tf-product-info-price">
                      <div className="price fw-6">$18.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /canvasSearch */}
  {/* toolbarShopmb */}
  <div className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile" id="toolbarShopmb">
    <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close" />
    <div className="mb-canvas-content">
      <div className="mb-body">
        <ul className="nav-ul-mb" id="wrapper-menu-navigation">
          <li className="nav-mb-item">
            <a href="shop-default.html" className="tf-category-link mb-menu-link">
              <div className="image">
                <img src="images/shop/cate/cate1.jpg"/>
              </div>
              <span>Accessories</span>
            </a>
          </li>
          <li className="nav-mb-item">
            <a href="shop-default.html" className="tf-category-link mb-menu-link">
              <div className="image">
                <img src="images/shop/cate/cate2.jpg"/>
              </div>
              <span>Dog</span>
            </a>
          </li>
          <li className="nav-mb-item">
            <a href="shop-default.html" className="tf-category-link mb-menu-link">
              <div className="image">
                <img src="images/shop/cate/cate3.jpg"/>
              </div>
              <span>Grocery</span>
            </a>
          </li>
          <li className="nav-mb-item">
            <a href="shop-default.html" className="tf-category-link mb-menu-link">
              <div className="image">
                <img src="images/shop/cate/cate4.png"/>
              </div>
              <span>Handbag</span>
            </a>
          </li>
          <li className="nav-mb-item">
            <a href="#cate-menu-one" className="tf-category-link has-children collapsed mb-menu-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="cate-menu-one">
              <div className="image">
                <img src="images/shop/cate/cate5.jpg"/>
              </div>
              <span>Fashion</span>
              <span className="btn-open-sub" />
            </a>
            <div id="cate-menu-one" className="collapse list-cate">
              <ul className="sub-nav-menu" id="cate-menu-navigation">
                <li>
                  <a href="#cate-shop-one" className="tf-category-link has-children sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="cate-shop-one">
                    <div className="image">
                      <img src="images/shop/cate/cate6.jpg"/>
                    </div>
                    <span>Mens</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="cate-shop-one" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li>
                        <a href="shop-default.html" className="tf-category-link sub-nav-link">
                          <div className="image">
                            <img src="images/shop/cate/cate1.jpg"/>
                          </div>
                          <span>Accessories</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-default.html" className="tf-category-link sub-nav-link">
                          <div className="image">
                            <img src="images/shop/cate/cate8.jpg"/>
                          </div>
                          <span>Shoes</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#cate-shop-two" className="tf-category-link has-children sub-nav-link collapsed" data-bs-toggle="collapse" aria-expanded="true" aria-controls="cate-shop-two">
                    <div className="image">
                      <img src="images/shop/cate/cate9.jpg"/>
                    </div>
                    <span>Womens</span>
                    <span className="btn-open-sub" />
                  </a>
                  <div id="cate-shop-two" className="collapse">
                    <ul className="sub-nav-menu sub-menu-level-2">
                      <li>
                        <a href="shop-default.html" className="tf-category-link sub-nav-link">
                          <div className="image">
                            <img src="images/shop/cate/cate4.png"/>
                          </div>
                          <span>Handbag</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-default.html" className="tf-category-link sub-nav-link">
                          <div className="image">
                            <img src="images/shop/cate/cate7.jpg"/>
                          </div>
                          <span>Tee</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="#cate-menu-two" className="tf-category-link has-children collapsed mb-menu-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="cate-menu-two">
              <div className="image">
                <img src="images/shop/cate/cate6.jpg"/>
              </div>
              <span>Men</span>
              <span className="btn-open-sub" />
            </a>
            <div id="cate-menu-two" className="collapse list-cate">
              <ul className="sub-nav-menu" id="cate-menu-navigation1">
                <li>
                  <a href="shop-default.html" className="tf-category-link sub-nav-link">
                    <div className="image">
                      <img src="images/shop/cate/cate1.jpg"/>
                    </div>
                    <span>Accessories</span>
                  </a>
                </li>
                <li>
                  <a href="shop-default.html" className="tf-category-link sub-nav-link">
                    <div className="image">
                      <img src="images/shop/cate/cate8.jpg"/>
                    </div>
                    <span>Shoes</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-mb-item">
            <a href="shop-default.html" className="tf-category-link mb-menu-link">
              <div className="image">
                <img src="images/shop/cate/cate7.jpg"/>
              </div>
              <span>Tee</span>
            </a>
          </li>
          <li className="nav-mb-item">
            <a href="shop-default.html" className="tf-category-link mb-menu-link">
              <div className="image">
                <img src="images/shop/cate/cate8.jpg"/>
              </div>
              <span>Shoes</span>
            </a>
          </li>
          <li className="nav-mb-item">
            <a href="#cate-menu-three" className="tf-category-link has-children collapsed mb-menu-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="cate-menu-three">
              <div className="image">
                <img src="images/shop/cate/cate9.jpg"/>
              </div>
              <span>Women</span>
              <span className="btn-open-sub" />
            </a>
            <div id="cate-menu-three" className="collapse list-cate">
              <ul className="sub-nav-menu" id="cate-menu-navigation2">
                <li>
                  <a href="shop-default.html" className="tf-category-link sub-nav-link">
                    <div className="image">
                      <img src="images/shop/cate/cate4.png" alt="" />
                    </div>
                    <span>Handbag</span>
                  </a>
                </li>
                <li>
                  <a href="shop-default.html" className="tf-category-link sub-nav-link">
                    <div className="image">
                      <img src="images/shop/cate/cate7.jpg"/>
                    </div>
                    <span>Tee</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-bottom">
        <a href="shop-default.html" className="tf-btn fw-5 btn-line">View all collection<i className="icon icon-arrow1-top-left" /></a>
      </div>
    </div>       
  </div>
  {/* /toolbarShopmb */}
  {/* modal login */}
  <div className="modal modalCentered fade form-sign-in modal-part-content" id="login">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <div className="demo-title">Log in</div>
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="tf-login-form">
          <form className="" action="https://themesflat.co/html/ecomus/my-account.html" acceptCharset="utf-8">
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="email" name="email" />
              <label className="tf-field-label" htmlFor="">Email *</label>
            </div>
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="password" name="password" />
              <label className="tf-field-label" htmlFor="">Password *</label>
            </div>
            <div>
              <a href="#forgotPassword" data-bs-toggle="modal" className="btn-link link">Forgot your password?</a>
            </div>
            <div className="bottom"> 
              <div className="w-100">
                <button type="submit" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Log in</span></button>
              </div>
              <div className="w-100">
                <a href="#register" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                  New customer? Create your account
                  <i className="icon icon-arrow1-top-left" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="modal modalCentered fade form-sign-in modal-part-content" id="forgotPassword">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <div className="demo-title">Reset your password</div>
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="tf-login-form">
          <form className="">
            <div>
              <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
            </div>
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="email" name="email" />
              <label className="tf-field-label" htmlFor="">Email *</label>
            </div>
            <div>
              <a href="#login" data-bs-toggle="modal" className="btn-link link">Cancel</a>
            </div>
            <div className="bottom"> 
              <div className="w-100">
                <button type="submit" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Reset password</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="modal modalCentered fade form-sign-in modal-part-content" id="register">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <div className="demo-title">Register</div>
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="tf-login-form">
          <form className="">
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="text" name="" />
              <label className="tf-field-label" htmlFor="">First name</label>
            </div>
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="text" name="" />
              <label className="tf-field-label" htmlFor="">Last name</label>
            </div>
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="email" name="" />
              <label className="tf-field-label" htmlFor="">Email *</label>
            </div>
            <div className="tf-field style-1">
              <input className="tf-field-input tf-input" placeholder=" " type="password" name="" />
              <label className="tf-field-label" htmlFor="">Password *</label>
            </div>
            <div className="bottom"> 
              <div className="w-100">
                <a href="register.html" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Register</span></a>
              </div>
              <div className="w-100">
                <a href="#login" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                  Already have an account? Log in here
                  <i className="icon icon-arrow1-top-left" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /modal login */}
  {/* modal compare */}
  <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
    <div className="canvas-wrapper">
      <header className="canvas-header">
        <div className="close-popup">
          <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
      </header>
      <div className="canvas-body">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf-compare-list">
                <div className="tf-compare-head">
                  <div className="title">Compare Products</div>
                </div>
                <div className="tf-compare-offcanvas">
                  <div className="tf-compare-item">
                    <div className="position-relative">
                      <div className="icon">
                        <i className="icon-close" />
                      </div>
                      <a href="product-detail.html">
                        <img className="radius-3" src="images/products/orange-1.jpg" alt=''/>
                      </a>
                    </div>
                  </div>
                  <div className="tf-compare-item">
                    <div className="position-relative">
                      <div className="icon">
                        <i className="icon-close" />
                      </div>
                      <a href="product-detail.html">
                        <img className="radius-3" src="images/products/pink-1.jpg" alt='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tf-compare-buttons">
                  <div className="tf-compare-buttons-wrap">
                    <a href="compare.html" className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn ">Compare</a>
                    <div className="tf-compapre-button-clear-all link">
                      Clear All
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>       
  </div>
  {/* /modal compare */}
  {/* modal quick_add */}
  <div className="modal fade modalDemo" id="quick_add">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="wrap">
          <div className="tf-product-info-item">
            <div className="image">
              <img src="images/products/orange-1.jpg"/>
            </div>
            <div className="content">
              <a href="product-detail.html">Ribbed Tank Top</a>
              <div className="tf-product-info-price">
                {/* <div class="price-on-sale">$8.00</div>
                          <div class="compare-at-price">$10.00</div>
                          <div class="badges-on-sale"><span>20</span>% OFF</div> */}
                <div className="price">$18.00</div>
              </div>
            </div>
          </div>
          <div className="tf-product-info-variant-picker mb_15">
            <div className="variant-picker-item">
              <div className="variant-picker-label">
                Color: <span className="fw-6 variant-picker-label-value">Orange</span>
              </div>
              <div className="variant-picker-values">
                <input id="values-orange" type="radio" name="color" defaultChecked />
                <label className="hover-tooltip radius-60" htmlFor="values-orange" data-value="Orange">
                  <span className="btn-checkbox bg-color-orange" />
                  <span className="tooltip">Orange</span>
                </label>
                <input id="values-black" type="radio" name="color" />
                <label className=" hover-tooltip radius-60" htmlFor="values-black" data-value="Black">
                  <span className="btn-checkbox bg-color-black" />
                  <span className="tooltip">Black</span>
                </label>
                <input id="values-white" type="radio" name="color" />
                <label className="hover-tooltip radius-60" htmlFor="values-white" data-value="White">
                  <span className="btn-checkbox bg-color-white" />
                  <span className="tooltip">White</span>
                </label>
              </div>
            </div>
            <div className="variant-picker-item">
              <div className="variant-picker-label">
                Size: <span className="fw-6 variant-picker-label-value">S</span>
              </div>
              <div className="variant-picker-values">
                <input type="radio" name="size" id="values-s" defaultChecked />
                <label className="style-text" htmlFor="values-s" data-value="S">
                  <p>S</p>
                </label>
                <input type="radio" name="size" id="values-m" />
                <label className="style-text" htmlFor="values-m" data-value="M">
                  <p>M</p>
                </label>
                <input type="radio" name="size" id="values-l" />
                <label className="style-text" htmlFor="values-l" data-value="L">
                  <p>L</p>
                </label>
                <input type="radio" name="size" id="values-xl" />
                <label className="style-text" htmlFor="values-xl" data-value="XL">
                  <p>XL</p>
                </label>
              </div>
            </div>
          </div>
          <div className="tf-product-info-quantity mb_15">
            <div className="quantity-title fw-6">Quantity</div>
            <div className="wg-quantity">
              <span className="btn-quantity minus-btn">-</span>
              <input type="text" name="number" defaultValue={1} />
              <span className="btn-quantity plus-btn">+</span>
            </div>
          </div>
          <div className="tf-product-info-buy-button">
            <form className="">
              <a href="javascript:void(0);" className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"><span>Add to cart -&nbsp;</span><span className="tf-qty-price">$18.00</span></a>
              <div className="tf-product-btn-wishlist btn-icon-action">
                <i className="icon-heart" />
                <i className="icon-delete" />
              </div>
              <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action">
                <span className="icon icon-compare" />
                <span className="icon icon-check" />
              </a>
              <div className="w-100">
                <a href="#" className="btns-full">Buy with <img src="images/payments/paypal.png" alt='' /></a>
                <a href="#" className="payment-more-option">More payment options</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /modal quick_add */}
  {/* modal quick_view */}
  <div className="modal fade modalDemo" id="quick_view">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="wrap">
          <div className="tf-product-media-wrap">
            <div className="swiper tf-single-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="item">
                    <img src="images/products/orange-1.jpg" alt='' />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item">
                    <img src="images/products/pink-1.jpg" alt='' />
                  </div>
                </div>
              </div>
              <div className="swiper-button-next button-style-arrow single-slide-prev" />
              <div className="swiper-button-prev button-style-arrow single-slide-next" />
            </div>
          </div>
          <div className="tf-product-info-wrap position-relative">
            <div className="tf-product-info-list">
              <div className="tf-product-info-title">
                <h5><a className="link" href="product-detail.html">Ribbed Tank Top</a></h5>
              </div>
              <div className="tf-product-info-badges">
                <div className="badges text-uppercase">Best seller</div>
                <div className="product-status-content">
                  <i className="icon-lightning" />
                  <p className="fw-6">Selling fast! 48 people have this in their carts.</p>
                </div>
              </div>
              <div className="tf-product-info-price">
                <div className="price">$18.00</div>
              </div>
              <div className="tf-product-description">
                <p>Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac aptent ligula facilisis a auctor habitant parturient a a.Interdum fermentum.</p>
              </div>
              <div className="tf-product-info-variant-picker">
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Color: <span className="fw-6 variant-picker-label-value">Orange</span>
                  </div>
                  <div className="variant-picker-values">
                    <input id="values-orange-1" type="radio" name="color-1" defaultChecked />
                    <label className="hover-tooltip radius-60" htmlFor="values-orange-1" data-value="Orange">
                      <span className="btn-checkbox bg-color-orange" />
                      <span className="tooltip">Orange</span>
                    </label>
                    <input id="values-black-1" type="radio" name="color-1" />
                    <label className=" hover-tooltip radius-60" htmlFor="values-black-1" data-value="Black">
                      <span className="btn-checkbox bg-color-black" />
                      <span className="tooltip">Black</span>
                    </label>
                    <input id="values-white-1" type="radio" name="color-1" />
                    <label className="hover-tooltip radius-60" htmlFor="values-white-1" data-value="White">
                      <span className="btn-checkbox bg-color-white" />
                      <span className="tooltip">White</span>
                    </label>
                  </div>
                </div>
                <div className="variant-picker-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="variant-picker-label">
                      Size: <span className="fw-6 variant-picker-label-value">S</span>
                    </div>
                    <div className="find-size btn-choose-size fw-6">Find your size</div>
                  </div>
                  <div className="variant-picker-values">
                    <input type="radio" name="size-1" id="values-s-1" defaultChecked />
                    <label className="style-text" htmlFor="values-s-1" data-value="S">
                      <p>S</p>
                    </label>
                    <input type="radio" name="size-1" id="values-m-1" />
                    <label className="style-text" htmlFor="values-m-1" data-value="M">
                      <p>M</p>
                    </label>
                    <input type="radio" name="size-1" id="values-l-1" />
                    <label className="style-text" htmlFor="values-l-1" data-value="L">
                      <p>L</p>
                    </label>
                    <input type="radio" name="size-1" id="values-xl-1" />
                    <label className="style-text" htmlFor="values-xl-1" data-value="XL">
                      <p>XL</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-quantity">
                <div className="quantity-title fw-6">Quantity</div>
                <div className="wg-quantity">
                  <span className="btn-quantity minus-btn">-</span>
                  <input type="text" name="number" defaultValue={1} />
                  <span className="btn-quantity plus-btn">+</span>
                </div>
              </div>
              <div className="tf-product-info-buy-button">
                <form className="">
                  <a href="javascript:void(0);" className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"><span>Add to cart -&nbsp;</span><span className="tf-qty-price">$8.00</span></a>
                  <a href="javascript:void(0);" className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action">
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action">
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <div className="w-100">
                    <a href="#" className="btns-full">Buy with <img src="images/payments/paypal.png" alt="" /></a>
                    <a href="#" className="payment-more-option">More payment options</a>
                  </div>
                </form>
              </div>
              <div>
                <a href="product-detail.html" className="tf-btn fw-6 btn-line">View full details<i className="icon icon-arrow1-top-left" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /modal quick_view */}
  {/* modal find_size */}
  <div className="modal fade modalDemo tf-product-modal" id="find_size">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="header">
          <div className="demo-title">Size chart</div>
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
        </div>
        <div className="tf-rte">
          <div className="tf-table-res-df">
            <h6>Size guide</h6>
            <table className="tf-sizeguide-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>US</th>
                  <th>Bust</th>
                  <th>Waist</th>
                  <th>Low Hip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>2</td>
                  <td>32</td>
                  <td>24 - 25</td>
                  <td>33 - 34</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>4</td>
                  <td>34 - 35</td>
                  <td>26 - 27</td>
                  <td>35 - 26</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>6</td>
                  <td>36 - 37</td>
                  <td>28 - 29</td>
                  <td>38 - 40</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>8</td>
                  <td>38 - 29</td>
                  <td>30 - 31</td>
                  <td>42 - 44</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>10</td>
                  <td>40 - 41</td>
                  <td>32 - 33</td>
                  <td>45 - 47</td>
                </tr>
                <tr>
                  <td>XXL</td>
                  <td>12</td>
                  <td>42 - 43</td>
                  <td>34 - 35</td>
                  <td>48 - 50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tf-page-size-chart-content">
            <div>
              <h6>Measuring Tips</h6>
              <div className="title">Bust</div>
              <p>Measure around the fullest part of your bust.</p>
              <div className="title">Waist</div>
              <p>Measure around the narrowest part of your torso.</p>
              <div className="title">Low Hip</div>
              <p className="mb-0">With your feet together measure around the fullest part of your hips/rear.
              </p>
            </div>
            <div>
              <img className="sizechart lazyload" data-src="images/shop/products/size_chart2.jpg" src="images/shop/products/size_chart2.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /modal find_size */}
  {/* Javascript */}
<Footer />
    </>
  )
}

export default ListCart;