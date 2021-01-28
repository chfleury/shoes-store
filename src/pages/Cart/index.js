import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTG-l4ohD0kgChOst_mqI8XFMLnelgLfZ3eeLu9CQiB3GwZadPCcsgFx-OLT_eKKQsVrQrp0IIdKvQ_R_tuK7U_ouoNEnfagEmdgj4717iVAltkiemerKz&usqp=CAE"
                alt="Teste "
              />
            </td>
            <td>
              <strong>Sapato teste</strong>
              <span>444.12</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={122.99} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>129.21</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>321,12</strong>
        </Total>
      </footer>
    </Container>
  );
}
