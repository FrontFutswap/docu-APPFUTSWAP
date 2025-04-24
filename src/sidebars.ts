import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'intro'
    },
    {
      type: 'category',
      label: 'Primeros pasos',
      items: [
        'primeros-pasos/descarga',
        'primeros-pasos/crear-cuenta',
        'primeros-pasos/agregar-billetera',
        'primeros-pasos/iniciar-sesion'
      ],
    },
    {
      type: 'category',
      label: 'Arquitectura',
      items: [
        'arquitectura/general',
        'arquitectura/flujo-de-datos',
        'arquitectura/seguridad'
      ],
    },
    {
      type: 'category',
      label: 'Módulos',
      items: [
        'modulos/compra',
        'modulos/enviar',
        'modulos/tarjetas',
        'modulos/exchange',
        'modulos/portafolio',
        'modulos/cuenta'
      ],
    },
    {
      type: 'doc',
      id: 'preferencias/preferencias',
      label: 'Configuración'
    }
  ],
};

export default sidebars;