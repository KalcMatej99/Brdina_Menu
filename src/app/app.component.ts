import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbdModalBasic } from "./modal/modal.component"
import { ModalProductComponent } from "./modal-product/modal-product.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title_start_message = "SK Brdina"
  subtitles_start_message = ["SMUČAJ Z BRDINO!", "SCIA COL BRDINA!", "SKI WITH BRDINA!", "SKI MIT BRDINA!"]
  button_start_message = ["Ogled cenika", "Mostra menu", "Show the menu", "Menü anzeigen"]

  titles = ['Kraška Ohcet 2022', "Nozze Carsiche 2022", "Karst Wedding 2022", "Karsthochzeit 2022"];

  language = 0
  language_texts = ["SLO 🇸🇮", "ITA 🇮🇹", "ENG 🇺🇸", "DE 🇩🇪"]

  description_button = ["Opis", "Info", "Info", "Info"]

  location_title = ["Kje smo?", "Dove siamo?", "Where are we?", "Wo sind wir?"]
  location = ["Repen, št. 20", "Repen, n. 20", "Repen, n. 20", "Repen, N. 20"]

  social_title = ["Socialna omrežja", "Reti Sociali", "Social Networks", "Soziale Netzwerke"]

  opensource_title = ["Stran je odprtokodna", "Il sito è open source", "Site is open source", "Die Website ist Open Source"]

  products: any[] = [{
    'id': 0,
    'names': ['Breskve v vinu', "Pesche nel vino", "Peaches with Wine", "Pfirsiche mit Wein"],
    'price': "3,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Breskve v vinu s sladkorjem so tradicionalni kraški napitek.", "Le pesche al vino con zucchero sono una bevanda tradizionale del Carso.", "Peaches in wine with sugar are a traditional Karst drink.", "Pfirsiche in Wein mit Zucker sind ein traditionelles Karstgetränk."]
  }, {
    'id': 1,
    'names': ['Surov pršut (100g)', "Prosciutto Crudo (100g)", "Raw Ham (100g)", "Schinken (100g)"],
    'price': "6,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 2,
    'names': ['Pečen pršut (100g)', "Prosciutto arrosto (100g)", "Roasted Ham (100g)", "Gerösteter Schinken (100g)"],
    'price': "6,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 3,
    'names': ['Sir (100g)', "Formaggio (100g)", "Cheese (100g)", "Käse (100g)"],
    'price': "4,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 4,
    'names': ['Sendvič s klobaso', "Panino con salsiccia", "Sandwich with Sausage", "Sandwich mit Wurst"],
    'price': "3,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 5,
    'names': ['Sendvič s sirom', "Panino con formaggio", "Sandwich with Cheese", "Sandwich mit Käse"],
    'price': "3,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 6,
    'names': ['Sendvič s pečenim pršutom', "Panino con prosciutto arrosto", "Sandwich with Roasted Ham", "Sandwich mit Gerösteter Schinken"],
    'price': "3,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 7,
    'names': ['Sendvič s surovim pršutom', "Panino con prosciutto crudo", "Sandwich with Raw Ham", "Sandwich mit Schinken"],
    'price': "3,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 8,
    'names': ['Jota', "Jota", "Jota", "Traditionelle Sauerkrautsuppe"],
    'price': "4,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Jota je tradicionalna mineštra s kislim zeljem, fižolom in slanino.", "Jota è una minestra tradizionale con crauti, fagioli e pancetta.", "Jota is a traditional minestra with sauerkraut, beans and bacon.", "Jota ist eine traditionelle Minestra mit Sauerkraut, Bohnen und Speck."]
  }, {
    'id': 9,
    'names': ['Jota s klobaso', "Jota con salsiccia", "Jota with Sausage", "Traditionelle Sauerkrautsuppe mit Wurst"],
    'price': "5,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Jota je tradicionalna mineštra s kislim zeljem, fižolom, slanino. Dodana je še klobasa.", "Jota è una minestra tradizionale con crauti, fagioli e pancetta. Si aggiunge la salsiccia.", "Jota is a traditional minestra with sauerkraut, beans, and bacon. Sausage is added.", "Jota ist eine traditionelle Minestra mit Sauerkraut, Bohnen und Speck. Wurst kommt hinzu."]
  }, {
    'id': 10,
    'names': ['Klobasa z zeljem', "Salsiccia con crauti", "Sausage with cabbage", "Wurst mit Sauerkraut"],
    'price': "5,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 11,
    'names': ['Golaž', "Golas", "Gulasch", "Gulasch"],
    'price': "5,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Golaž je tradicionalen kraški mesni krožnik z paradižnikovo omako.", "Il gulasch è un piatto di carne tradizionale del Carso con salsa di pomodoro.", "Goulash is a traditional Karst meat dish with tomato sauce.", "Gulasch ist ein traditionelles Fleischgericht aus dem Karst mit Tomatensoße."]
  }, {
    'id': 12,
    'names': ['Kruhovi cmoki s golažem', "Gnocchi di pane con golas", "Bread dumplings with Gulasch", "Knödel aus Brot mit Gulasch"],
    'price': "6,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Tradicionalni kraški njoki iz kruha s golažem.", "Gnocchi tradizionali del Carso di pane con gulasch.", "Traditional Karst gnocchi made from bread with goulash.", "Traditionelle Karst-Gnocchi aus Brot mit Gulasch."]
  }, {
    'id': 13,
    'names': ['Češpljevi cmoki', "Gnocchi de susini", "Sweet plums dumplings", "Zwetschgenknödel"],
    'price': "3,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Češpljevi cmoki so tradicionalna kraška sladica s sladica iz krompirjevega testa s slivo.", "Gli gnocchi 'de susini' sono un dolce tipico del Carso a base di pasta di patate e prugne.", "Gnocchi 'de susini' are a typical Karst dessert made with potato and plum paste.", "Gnocchi 'de susini' sind ein typisches Karst-Dessert aus Kartoffel- und Pflaumenpaste."]
  }, {
    'id': 14,
    'names': ['Kuhani štruklji z orehi', "Struccoli cotti alle noci", "Cooked traditional sweet with walnuts", "Gekochter Strukkoli mit Walnuss"],
    'price': "4,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Kuhani štruklji z orehi, skuto in rozinami je tradicionalna kraška sladica.", "Lo struccolo con noci, ricotta e uvetta è un dolce tipico del Carso.", "Struccolo with walnuts, ricotta and raisins is a typical dessert of the Karst.", "Struccolo mit Walnüssen, Ricotta und Rosinen ist ein typisches Dessert des Karstes."]
  }, {
    'id': 15,
    'names': ['Kifelčki (slatki ali slani)', "Chifeletti (dolci o salati)", "Kipfel (sweet or savory)", "Kipfel (süß oder herzhaft)"],
    'price': "3,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Slani ali sladki kifelčki iz krompirja so tradicionalna kraška priloga.", "I chifeletti dolci o salati di patate sono un contorno tradizionale del Carso.", "Sweet or savory potato chifeletti are a traditional side dish from the Karst.", "Süße oder herzhafte Kartoffel-Chifeletti sind eine traditionelle Beilage aus dem Karst."]
  }, {
    'id': 16,
    'names': ['Kuhana jajca', "Uova sode", "Bolled eggs", "Gekochte Eier"],
    'price': "0,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 17,
    'names': ['Rezina kruha', "Fetta di pane", "Slice of bread", "Brot (Scheibe)"],
    'price': "0,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 18,
    'names': ['Vino Steklenica (0,75L)', "Vino Bottiglia (0,75L)", "Wine Bottle (0,75L)", "Flasche Wien (0,75L)"],
    'price': "6,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Steklenica črnega ali belega kraškega vina.", "Una bottiglia di vino carsico nero o bianco.", "A bottle of black or white Karst wine.", "Eine Flasche schwarzen oder weißen Karstwein."]
  }, {
    'id': 19,
    'names': ['Vino kozarec (0,08L)', "Vino bicchiere (0,08L)", "Glass of Wine (0,08L)", "Weinglas (0,08L)"],
    'price': "1,50€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Kozarec črnega ali belega kraškega vina.", "Un bicchiere di vino carsico nero o bianco.", "A glass of black or white Karst wine.", "Ein Glas schwarzen oder weißen Karstwein."]
  }, {
    'id': 20,
    'names': ['Teranov Liker', "Liquore vino terrano", "Teran Wine Liquor", "Teran Weinlikör"],
    'price': "3,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["Liker iz kraškega terana.", "Liquore del Terrano carsico.", "Liqueur from the Karst Teran.", "Likör aus dem Karst Teran."]
  }, {
    'id': 21,
    'names': ['Špric', "Spritz", "Spritz", "Spritzer"],
    'price': "2,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 22,
    'names': ['Coca cola (0,5L)', "Coca cola (0,5L)", "Coca cola (0,5L)", "Coca cola (0,5L)"],
    'price': "3,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 23,
    'names': ['Oranžada (0,5L)', "Aranciata (0,5L)", "Orange drink (0,5L)", "Orangen limonade (0,5L)"],
    'price': "3,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 24,
    'names': ['Voda (0,5L)', "Acqua (0,5L)", "Water (0,5L)", "Wasser (0,5L)"],
    'price': "1,00€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 25,
    'names': ['Kava', "Caffé", "Coffe", "Kaffee"],
    'price': "1,20€",
    "path_to_image": "assets/breskve_v_vinu.webp",
    "descriptions": ["", "", "", ""]
  }];

  selected_product = this.products[0];
  @ViewChild('toggler') navbarToggler: ElementRef;



  public change_language = (index_language: number): void => {
    this.language = index_language;
    this.navbarToggler.nativeElement.click()
    this.openModal();
  }

  @ViewChild('modal') public modalComponent: NgbdModalBasic;
  async openModal() {
    return await this.modalComponent.open();
  }

  @ViewChild('modal_product') public modalProductComponent: ModalProductComponent;
  async openModalProduct(productId: number) {
    this.selected_product = this.products[productId]
    if (this.selected_product.descriptions[0] != "") {
      return await this.modalProductComponent.open();
    }
    return null
  }

  ngAfterViewInit(): void {
    this.openModal();
  }
}
