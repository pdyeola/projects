var add = document.getElementById('add-btn')
var t = document.getElementById('display')

var row = 1
add.onclick = function () {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const age = document.getElementById('age').value
    const addr = document.getElementById('addr').value
    const phonenumber =document.getElementById('phone number').value
    const img = document.createElement('img')

    if (name != '' && email != '' && age != '' && addr != '' && phonenumber != '') {
        var values = []
        var selected_value = document.querySelectorAll('input[type="checkbox"]:checked')
        Array.from(selected_value).forEach(function (e) {
            values.push(e.value)
        })

        const description = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Age:</strong>${age}<br><strong>phonenumber:</strong> ${phonenumber}<br><strong>Address: </strong> ${addr}<br><strong>Gender:</strong> ${document.querySelector('input[type="radio"]:checked').value}
        <br><strong>Skills:</strong> ${values.join(', ')}</p>
        `
        var newRow = t.insertRow(row)

        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)

        if (document.querySelector('input[type="radio"]:checked').value == 'Male') {
            img.setAttribute('src', 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg')
            img.setAttribute('alt', 'Male')
        }
        else {
            img.setAttribute('src', 'data:image/png;base64,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')
            img.setAttribute('alt', 'Female')
        }

        cell1.innerHTML = description
        cell2.appendChild(img)

        row++
        document.getElementById('input-form').reset()
        name = email = age = ''
    }
    else {
        alert('Please fill all the fields')
    }
}

document.getElementById('delete-btn').onclick = function () {
    if (row != 1) {
        console.log(row)
        row--
        t.deleteRow(row)
    }
    else
        return
}