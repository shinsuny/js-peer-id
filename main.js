
async function appendNewKeypair() {
  const id = await PeerId.create({
    bits: document.getElementById('bits').value,
    keyType: document.querySelector('input[name="keytype"]:checked').value 
  })
  console.log(document.getElementById('bits').value)
  console.log(document.querySelector('input[name="keytype"]:checked').value)
  document.getElementById('keyout').value += JSON.stringify(id.toJSON(), null, 2) + '\n';
}

function clear() {
  alert("clear")
  document.getElementById('keyout').value = '';
}