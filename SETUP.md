# POSADA 2025 - Landing de Nominaciones

Una landing page interactiva para proyectar nominaciones con diplomas que revelan el nombre y foto al hacer click.

## ✨ Características

- **Diplomas Interactivos**: Haz click en cada diploma para revelar el nombre y foto del nominado
- **Diseño Responsivo**: Se adapta a cualquier tamaño de pantalla
- **Colores Personalizados**: Cada categoría tiene su propio color
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Optimizado para Proyección**: Diseño limpio y legible desde lejos

## 🗂️ Estructura de Archivos

```
src/
├── app/
│   ├── page.js              # Página principal
│   ├── page.module.css      # Estilos de la página
│   ├── layout.js            # Layout general
│   └── globals.css          # Estilos globales
├── components/
│   ├── DiplomaCard.js       # Componente del diploma
│   └── DiplomaCard.module.css # Estilos del diploma
└── data/
    └── nominaciones.json    # Datos de nominaciones
```

## 📝 Cómo Editar los Datos

Abre `src/data/nominaciones.json` y edita los siguientes campos para cada nominación:

```json
{
  "id": 1,
  "categoria": "El/la más vibecoder",
  "nombre": "Nombre del Nominado",
  "foto": "/nominees/nominado1.jpg",
  "color": "#FF6B6B"
}
```

### Campos:

- **id**: Número único (1-19)
- **categoria**: Nombre de la categoría
- **nombre**: Nombre del nominado
- **foto**: Ruta de la imagen (relativa a la carpeta `public`)
- **color**: Color hexadecimal del diploma

## 📸 Agregar Fotos

1. Crea una carpeta `public/nominees/` en tu proyecto
2. Coloca las imágenes JPG o PNG de los nominados
3. Asegúrate de que las imágenes sean cuadradas (idealmente 400x400px o mayor)
4. Actualiza la ruta en el JSON: `/nominees/nombre-del-archivo.jpg`

## 🚀 Para Proyectar

1. Inicia el servidor de desarrollo: `npm run dev`
2. Abre en el navegador: `http://localhost:3000`
3. Usa **F11** para pantalla completa (recomendado)
4. Haz click en los diplomas para revelar a los nominados

## 🎨 Personalización de Colores

Si deseas cambiar el fondo general, edita `src/app/page.module.css`:

```css
.container {
  background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 50%, #1a472a 100%);
}
```

## 💡 Consejos para la Proyección

- Usa un navegador en modo pantalla completa
- Asegúrate de que las imágenes tengan buena resolución
- Prueba el click en proyector para verificar la responsividad
- Los colores de los diplomas están diseñados para ser visibles en proyectores

## 📦 Requisitos

- Node.js 18+
- Next.js 14+
- React 18+

## 🎯 Próximos Pasos

1. Añade las fotos en `public/nominees/`
2. Actualiza los nombres en `src/data/nominaciones.json`
3. Personaliza los colores según tu preferencia
4. ¡Proyecta y disfruta! 🎄
