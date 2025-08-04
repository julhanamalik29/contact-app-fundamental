let contacts = [
  {
    id: 1,
    name: "Julhan Abdul Malik",
    tag: "julhanamalik",
    imageUrl: "/images/julhan1.jpg",
  },
  {
    id: 2,
    name: "Julhan",
    tag: "judul",
    imageUrl: "/images/julhan2.jpg",
  },
  {
    id: 3,
    name: "Amelinda Renjani",
    tag: "amelinda",
    imageUrl: "/images/julhan3.jpeg",
  },
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [
    ...contacts,
    { id: +new Date(), imageUrl: "/images/default.jpg", ...contact },
  ];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
