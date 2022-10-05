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

  titles = ['Barcolana 2022', "Barcolana 2022", "Barcolana 2022", "Barcolana 2022"];

  language = 0
  language_texts = ["SLO 🇸🇮", "ITA 🇮🇹", "ENG 🇺🇸", "DE 🇩🇪"]

  description_button = ["Opis", "Info", "Info", "Info"]

  location_title = ["Kje smo?", "Dove siamo?", "Where are we?", "Wo sind wir?"]
  location = ["Obelisk, Opčine", "Obelisco, Opicina", "Repen, n. 20", "Repen, N. 20"]

  social_title = ["Socialna omrežja", "Reti Sociali", "Social Networks", "Soziale Netzwerke"]

  opensource_title = ["Stran je odprtokodna", "Il sito è open source", "Site is open source", "Die Website ist Open Source"]

  products: any[] = [{
    'id': 0,
    'names': ['Pivo (0,3L)', "Birra (0,3L)", "Beer (0,3L)", "Bier (0,3L)"],
    'price': "3,00€",
    "path_to_image": "assets/pivo.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 1,
    'names': ['Surov pršut (100g)', "Prosciutto Crudo (100g)", "Raw Ham (100g)", "Schinken (100g)"],
    'price': "6,00€",
    "path_to_image": "assets/prsut_srov.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 2,
    'names': ['Pečen pršut (100g)', "Prosciutto cotto (100g)", "Baked Ham (100g)", "Gebackener Schinken (100g)"],
    'price': "6,00€",
    "path_to_image": "assets/kuhan_prsut.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 3,
    'names': ['Sir (100g)', "Formaggio (100g)", "Cheese (100g)", "Käse (100g)"],
    'price': "4,00€",
    "path_to_image": "assets/sir.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 4,
    'names': ['Sendvič', "Panino", "Sandwich", "Sandwich"],
    'price': "3,50€",
    "path_to_image": "assets/sendvic.webp",
    "descriptions": ["Sendvič je s pršutom surovim ali s pršutom kuhanim ali s sirom ali s klobaso.", "Il panino viene fornito con prosciutto crudo o prosciutto cotto o formaggio o salsiccia.", "The sandwich comes with raw ham or cooked ham or cheese or sausage.", "Das Sandwich wird mit rohem Schinken oder gekochtem Schinken oder Käse oder Wurst serviert."]
  }, {
    'id': 5,
    'names': ['Jota', "Jota", "Jota", "Traditionelle Sauerkrautsuppe"],
    'price': "4,00€",
    "path_to_image": "assets/jota.webp",
    "descriptions": ["Jota je tradicionalna mineštra s kislim zeljem, fižolom in slanino.", "Jota è una minestra tradizionale con crauti, fagioli e pancetta.", "Jota is a traditional minestra with sauerkraut, beans and bacon.", "Jota ist eine traditionelle Minestra mit Sauerkraut, Bohnen und Speck."]
  }, {
    'id': 6,
    'names': ['Jota s klobaso', "Jota con salsiccia", "Jota with Sausage", "Traditionelle Sauerkrautsuppe mit Wurst"],
    'price': "5,50€",
    "path_to_image": "assets/jota_s_klobaso.webp",
    "descriptions": ["Jota je tradicionalna mineštra s kislim zeljem, fižolom, slanino. Dodana je še klobasa.", "Jota è una minestra tradizionale con crauti, fagioli e pancetta. Si aggiunge la salsiccia.", "Jota is a traditional minestra with sauerkraut, beans, and bacon. Sausage is added.", "Jota ist eine traditionelle Minestra mit Sauerkraut, Bohnen und Speck. Wurst kommt hinzu."]
  }, {
    'id': 8,
    'names': ['Oranžada (0,5L)', "Aranciata (0,5L)", "Orange drink (0,5L)", "Orangen limonade (0,5L)"],
    'price': "2,50€",
    "path_to_image": "assets/aranciata.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 9,
    'names': ['Voda (0,5L)', "Acqua (0,5L)", "Water (0,5L)", "Wasser (0,5L)"],
    'price': "1,20€",
    "path_to_image": "assets/voda.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 10,
    'names': ['Kava', "Caffé", "Coffe", "Kaffee"],
    'price': "1,20€",
    "path_to_image": "assets/kava.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 12,
    'names': ['Kruhovi cmoki z golažem', "Gnocchi di pane con gulasch", "Bread dumplings with Gulasch", "Knödel aus Brot mit Gulasch"],
    'price': "6,50€",
    "path_to_image": "assets/kruhovi_cmoki_s_gulazem.webp",
    "descriptions": ["Tradicionalni kraški cmoki iz kruha z golažem.", "Gnocchi tradizionali del Carso di pane con gulasch.", "Traditional Karst gnocchi made from bread with goulash.", "Traditionelle Karst-Gnocchi aus Brot mit Gulasch."]
  }, {
    'id': 17,
    'names': ['Rezina kruha', "Fetta di pane", "Slice of bread", "Brot (Scheibe)"],
    'price': "0,50€",
    "path_to_image": "assets/kruh.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 18,
    'names': ['Steklenica vina (0,75L)', "Bottiglia di vino(0,75L)", "Bottle of wine (0,75L)", "Flasche Wien (0,75L)"],
    'price': "6,00€",
    "path_to_image": "assets/vino_steklenica.webp",
    "descriptions": ["Steklenica črnega ali belega kraškega vina.", "Una bottiglia di vino carsico nero o bianco.", "A bottle of black or white Karst wine.", "Eine Flasche schwarzen oder weißen Karstwein."]
  }, {
    'id': 19,
    'names': ['Kozarec vina (0,08L)', "Bicchiere di vino(0,08L)", "Glass of Wine (0,08L)", "Weinglas (0,08L)"],
    'price': "1,50€",
    "path_to_image": "assets/vino_kozarec.webp",
    "descriptions": ["Kozarec črnega ali belega kraškega vina.", "Un bicchiere di vino carsico nero o bianco.", "A glass of black or white Karst wine.", "Ein Glas schwarzen oder weißen Karstwein."]
  }, {
    'id': 20,
    'names': ['Teranov Liker', "Liquore vino terrano", "Teran Wine Liquor", "Teran Weinlikör"],
    'price': "2,50€",
    "path_to_image": "assets/teranov_liker.webp",
    "descriptions": ["Liker iz kraškega terana.", "Liquore del Terrano carsico.", "Liqueur from the Karst Teran.", "Likör aus dem Karst Teran."]
  }, {
    'id': 21,
    'names': ['Špric', "Spritz", "Spritz", "Spritzer"],
    'price': "2,00€",
    "path_to_image": "assets/spritz.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 22,
    'names': ['Coca cola (0,5L)', "Coca cola (0,5L)", "Coca cola (0,5L)", "Coca cola (0,5L)"],
    'price': "2,50€",
    "path_to_image": "assets/coca_cola.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 22,
    'names': ['Topel čaj', "Thè caldo", "Hot the", "Heißer Tee"],
    'price': "1,00€",
    "path_to_image": "assets/topel_čaj.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 22,
    'names': ['Pivo na meter', "Metro di Birra", "Meter of Beer", "Bierzähler"],
    'price': "25,00€",
    "path_to_image": "assets/pivo_na_meter.webp",
    "descriptions": ["", "", "", ""]
  }, {
    'id': 22,
    'names': ['Krof', "Krapfen", "Krapfen", "Krapfen"],
    'price': "1,50€",
    "path_to_image": "assets/krof.webp",
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
  async openModalProduct(productName: string) {
    for(var i = 0; i < this.products.length; i++) {
      if(productName == this.products[i].names[0]) {
        this.selected_product = this.products[i]
        if (this.selected_product.descriptions[0] != "") {
          return await this.modalProductComponent.open();
        }
      }
    }
    return null
  }

  ngAfterViewInit(): void {
    this.openModal();
  }
}
