
async function loadMenu() {
  try {
      const loader = document.getElementById('loader');
      const menu = document.getElementById('menu');
      const summary = document.getElementById('order-summary');
      const response = await fetch('http://localhost:8000/menu');
      if (!response.ok) {
          console.log('Failed to load menu data');
          return;
      }

      const menuData = await response.json();

      // Hide the loader and display the menu
      loader.style.display = 'none';
      await displayMenu(menuData);
      await displaySummary();
  } catch (error) {
      console.error('Error fetching menu:', error);
  }
}

async function displayMenu(menuData) {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';

  // Iterate over menu items and create elements
  for (const itemName in menuData.items) {
      const item = menuData.items[itemName];
      const { name, price, description } = item;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const title = document.createElement('h3');
      title.innerText = `${name} ($${price.toFixed(2)})`;

      const desc = document.createElement('p');
      desc.innerText = description;

      const label = document.createElement('label');
      label.innerText = 'Quantity: ';
      label.setAttribute('for', 'currency-field');

      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.id = 'currency-field';
      quantityInput.name = 'currency-field';
      quantityInput.value = 0;
      quantityInput.max = 5;

      itemDiv.appendChild(title);
      itemDiv.appendChild(desc);
      itemDiv.appendChild(label);
      itemDiv.appendChild(quantityInput);

      menu.appendChild(itemDiv);
  }
}

async function displaySummary() {
  const menu = document.getElementById('menu');
  const summary = document.getElementById('order-summary');
  const inputs = document.querySelectorAll('input[name="currency-field"]');

  inputs.forEach((input) => {
      input.addEventListener('input', updateSummary);
  });

  function updateSummary() {
      const items = menu.getElementsByClassName('item');
      let summaryText = '';

      for (const item of items) {
          const title = item.querySelector('h3').textContent;
          const quantity = parseInt(item.querySelector('input').value);

          if (quantity > 0) {
              const price = parseFloat(title.match(/\$(\d+\.\d+)/)[1]);
              const itemTotal = price * quantity;
              summaryText += `${title} (${quantity} x $${price.toFixed(2)} = $${itemTotal.toFixed(2)})\n`;
          }
      }

      summary.querySelector('p').textContent = summaryText.trim() || 'Empty Order';
  }
}

document.addEventListener('DOMContentLoaded', loadMenu);

/*
List of endpoints:
  GET - http://localhost:8000/hello -> {'Hello': 'World'} Here as an example
  GET - http://localhost:8000/menu -> {'items': menu} A dict of the menu
  POST - http://localhost:8000/latest-order -> A dict of the latest order
  POST - http://localhost:8000/orders -> An endpoint to handle an order. The order is in the http body as so: { 'items': items }

*/
