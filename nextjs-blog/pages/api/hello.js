const citations = ["asd", "sasdasdsdaa", "sdfgsdf"];

export default function handler(req, res) {
  res.status(200).json({ text: citationService() });
}

function citationService() {
  return citations[Math.floor(Math.random() * citations.length)];
}
