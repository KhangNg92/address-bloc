
const MenuController = require("../controllers/MenuController");
describe("MenuController", () => {
    describe("#getContactCount()", () => {
 
        beforeEach(() => {
            this.menu = new MenuController();
        })
 // #2
      it("should return 0 when no contacts are in the book", () => {      
        expect(this.menu.getContactCount()).toBe(0);
      });
      it("should return 1 when there is exactly one contact in the book", () => {
          this.menu.contacts.addContact("Bob","555-555-5555");
          expect(this.menu.getContactCount()).toBe(1)
      });

      it("should return 'Learning is a life-long pursuit.'", () => {
          expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit.');
      })
    });

    describe("#delete()", () => {

        it("should not remove any contacts that do not match the ID passed", (done) => {
          this.book.addContact("Rick Deckard", "000-000-000", "null@null.com")
          .then(() => {
            this.book.getContacts()
            .then((contacts) => {
              expect(contacts[0].name).toBe("Rick Deckard");
              expect(contacts.length).toBe(1);
              this.book.delete(99)
              .then(() => {
                this.book.getContacts()
                .then((contacts) => {
                  expect(contacts.length).toBe(1);
                  done();
                })
                .catch((err) => {
                  console.log(err);
                  done();
                });
              });
            });
          });
        });
   
        it("should remove the contact that matches the ID passed", (done) => {
   
          this.book.addContact("Rick Deckard", "000-000-000", "null@null.com").then((contact) => {
            this.book.getContacts()
            .then((contacts) => {
              expect(contacts[0].name).toBe("Rick Deckard");
              expect(contacts.length).toBe(1);
              this.book.delete(contact.id)
              .then(() => {
                this.book.getContacts()
                .then((contacts) => {
                  expect(contacts.length).toBe(0);
                  done();
                })
                .catch((err) => {
                  console.log(err);
                  done();
                });
              });
            });
          });
   
        });
   
      });
  });