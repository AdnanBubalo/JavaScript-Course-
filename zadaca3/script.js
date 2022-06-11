
/* ** JS2 - 5. Predavanje - Objects I - Domaća zadaća - Zadatak 1 **

1. Zadan je objekt 'phonebook'.
Napraviti funkciju printProperties() za ispis svojstava objekta i njihovih vrijednosti, poslati joj objekt 'phonebook' te ispisati za svaki kontakt njegovo ime, broj i grad stanovanja. 

2. Objektu dodati metodu search() koja prima ime kontakta i vraća sve podatke traženog 
kontakta ili 0 ako nije pronađen. U glavnom programu zatražiti od korisnika unos 
imena kontakta, pozvati metodu te ispisati podatke nađenog kontakta ili 
odgovarajuću poruku. 

3. Napisati funkciju addNewContact() za dodavanje novog, petog kontakta u imenik koja 
od korisnika traži unos podataka (ime, prezime, broj telefona i adresu - ulica, broj 
ulice, grad i poštanski broj grada). Pozvati funkciju i dodati novi kontakt. 

4. Napisati funkciju deleteContact() koja prima ime kontakta i briše ga iz imenika. 
Zatražiti od korisnika unos imena korisnika kojega želi ukloniti zatim to i učiniti.
Ponovno ispisati objekt koristeći funkciju printProperties().
 */

var phonebook = {
    contact1: {
      firstName: "Ana",
      lastName: "Anic",
      phoneNumber: "063/111-111",
      address: ['Ante Starcevica', '9', 'Mostar', '88000']
    },
    contact2: {
      firstName: "Ante",
      lastName: "Antic",
      phoneNumber: "063/222-111",
      address: ['Hrvatske mladezi', '7', 'Mostar', '88000']
    },
    contact3: {
      firstName: "Marko",
      lastName: "Markic",
      phoneNumber: "063/222-333",
      address: ['Kraljice Katarine', '10', 'Grude', '88340']
    },
    contact4: {
      firstName: "Hrvoje",
      lastName: "Horvat",
      phoneNumber: "098/2522-111",
      address: ['Jarunska ulica', '12', 'Zagreb', '10000']
    },
  
    search: function (ime) {
        for(let i in this) {
          if(typeof(this[i]) === 'object') {
              if(this[i].firstName === ime || 
            this[i].lastName === ime) {
              return this[i];
          }
        }
      }
      alert("Nije pronadjen kontakt")
      return 0;
    },
    
    addNewContact: function () {
        let ime = prompt('Unesite ime: ');
         let prezime = prompt('Unesite prezime: ');
        let brojTelefona = prompt('Unesite telefon: ');
          let ulica = prompt('Unesite ulicu: ');
        let brojUlice = prompt('Unesite broj ulice: ');
        let grad = prompt('Unesite grad: ');
        let postanskiBroj = prompt('Unesite postanski broj: ');
      
      this.contact5 = {
          firstName: ime,
          lastName: prezime,
          phoneNumber: brojTelefona,
          address: [ulica, brojUlice, grad, postanskiBroj]
      }
    },
    
    deleteContact: function (ime) {
        for(let i in this) {
          if(typeof(this[i]) === 'object') {
              if(this[i].firstName === ime || 
            this[i].lastName === ime) {
              delete this[i];
          }
        }
      }
    }
  };
  
  //1
  function printProperties(phonebook) {
      for(let i in phonebook) {
        let contact = phonebook[i];
      if(typeof(contact) !== 'function') {
            console.log(contact.firstName + ' ' + contact.phoneNumber + ' ' + contact.address[2])
      }
    }
  }
  
  printProperties(phonebook);
  
  //2
  //let pretraga = prompt("Unesite ime kontakta: ");
  //console.log(phonebook.search(pretraga));
  
  //3
  //phonebook.addNewContact();
  //printProperties(phonebook);
  
  //4
  //let brisi = prompt("Unesite ime kontakta kojeg zelite obrisati: ");
  //phonebook.deleteContact(brisi);
  //printProperties(phonebook);