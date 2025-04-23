import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduccion',
      label: 'Introducción'
    },
    {
      type: 'category',
      label: 'Primeros pasos',
      items: [
        {
          type: 'doc',
          id: 'primeros-pasos/descarga',
          label: 'Descarga'
        },
        {
          type: 'doc',
          id: 'primeros-pasos/crear-cuenta',
          label: 'Crear cuenta'
        },   
        {
          type: 'doc',
          id: 'primeros-pasos/agregar-billetera',
          label: 'Agregar billetera existente'
        },   
        {
          type: 'doc',
          id: 'primeros-pasos/iniciar-sesion',
          label: 'Iniciar Sesión Neowallet'
        },
              

      ]
    },
    {
      type: 'category',
      label: 'Arquitectura',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'arquitectura/general',
          label: 'General'
        },
        {
          type: 'doc',
          id: 'arquitectura/flujo-de-datos',
          label: 'Flujo de datos'
        },
        {
          type: 'doc',
          id: 'arquitectura/seguridad',
          label: 'Seguridad'
        },
      ],
    },
    {
      type: 'category',
      label: 'Modulos',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modulos/compra',
          label: 'Compra'
        },
        {
          type: 'doc',
          id: 'modulos/enviar',
          label: 'Enviar'
        },
        {
          type: 'doc',
          id: 'modulos/tarjetas',
          label: 'Tarjetas'
        },
        {
          type: 'doc',
          id: 'modulos/exchange',
          label: 'Exchange'
        },
        {
          type: 'doc',
          id: 'modulos/portafolio',
          label: 'Portafolio'
        },        
        {
          type: 'doc',
          id: 'modulos/cuenta',
          label: 'Cuenta'
        },        
      ],
    },
    {
      type: 'category',
      label: 'Configuración',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'preferencias/preferencias',
          label: 'Preferencias'
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorial Básico',
    //   collapsed: false,
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'tutorial-basics/create-a-page',
    //       label: 'Crear una página',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'tutorial-basics/create-a-document',
    //       label: 'Crear un documento',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'tutorial-basics/create-a-blog-post',
    //       label: 'Crear un post de blog',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'tutorial-basics/deploy-your-site',
    //       label: 'Desplegar tu sitio',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'tutorial-basics/markdown-features',
    //       label: 'Características de Markdown',
    //     },
    //   ],
    // },
  ],
};


export default sidebars;
