'use strict';

export async function up(queryInterface) {
  await queryInterface.bulkInsert('themes', [
    { name: 'VARIEDADES' },
    { name: 'DIVERTIDAS' },
    { name: 'CONHECIMENTOS GERAIS' },
    { name: 'CINEMA E TV' },
    { name: 'NATUREZA' },
    { name: 'VOCABULÁRIO' },
    { name: 'COMPLETE A FRASE' },
    { name: 'ESPORTES' },
    { name: 'COMIDA' },
    { name: 'ENTRETENIMENTO' },
  ], {});
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('users', null, {});
}
