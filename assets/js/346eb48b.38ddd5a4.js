"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[3061],{5306:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=a(4848),i=a(8453);const s={sidebar_position:3,slug:"/activities/part-2-frontend-development-and-integration/3-state-management-in-react"},o="State Management in React",r={id:"activities/PhotoSky/Part 2: Frontend Development and Integration/state-management-in-react",title:"State Management in React",description:"In this section, we'll dive deep into state management for our PhotoSky application using React hooks. We'll cover how to manage local component state, share state between components, handle side effects, implement error handling, and manage loading states in our application.",source:"@site/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/3-state-management-in-react.md",sourceDirName:"activities/PhotoSky/Part 2: Frontend Development and Integration",slug:"/activities/part-2-frontend-development-and-integration/3-state-management-in-react",permalink:"/docs/activities/part-2-frontend-development-and-integration/3-state-management-in-react",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/activities/PhotoSky/Part 2: Frontend Development and Integration/3-state-management-in-react.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/activities/part-2-frontend-development-and-integration/3-state-management-in-react"},sidebar:"activitiesSidebar",previous:{title:"Designing the User Interface",permalink:"/docs/activities/part-2-frontend-development-and-integration/2-designing-user-interface"},next:{title:"Integrating the Backend API",permalink:"/docs/activities/part-2-frontend-development-and-integration/4-integrating-backend-api"}},c={},l=[{value:"Understanding State in React",id:"understanding-state-in-react",level:2},{value:"React Hooks for State Management",id:"react-hooks-for-state-management",level:2},{value:"Managing Application State",id:"managing-application-state",level:2},{value:"Fetching Images and Error Handling",id:"fetching-images-and-error-handling",level:2},{value:"Managing Theme",id:"managing-theme",level:2},{value:"Handling Image Upload and Camera Integration",id:"handling-image-upload-and-camera-integration",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Error Handling and Notifications",id:"error-handling-and-notifications",level:2},{value:"Loading State",id:"loading-state",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"state-management-in-react",children:"State Management in React"})}),"\n",(0,t.jsx)(n.p,{children:"In this section, we'll dive deep into state management for our PhotoSky application using React hooks. We'll cover how to manage local component state, share state between components, handle side effects, implement error handling, and manage loading states in our application."}),"\n",(0,t.jsx)(n.h2,{id:"understanding-state-in-react",children:"Understanding State in React"}),"\n",(0,t.jsx)(n.p,{children:"State in React represents the data that can change over time in your application. When state changes, React re-renders the components that depend on that state, updating the UI to reflect the new data."}),"\n",(0,t.jsx)(n.h2,{id:"react-hooks-for-state-management",children:"React Hooks for State Management"}),"\n",(0,t.jsx)(n.p,{children:'React Hooks are functions that let you "hook into" React state and lifecycle features from function components. We\'ll be using several hooks in our PhotoSky application:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useState"}),": For managing local component state"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useEffect"}),": For performing side effects in function components"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useCallback"}),": For memoizing functions to optimize performance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useRef"}),": For creating mutable references that persist across re-renders"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Let's see how we're using these hooks in our PhotoSky application."}),"\n",(0,t.jsx)(n.h2,{id:"managing-application-state",children:"Managing Application State"}),"\n",(0,t.jsxs)(n.p,{children:["In our ",(0,t.jsx)(n.code,{children:"Album"})," component (inside ",(0,t.jsx)(n.code,{children:"App.js"}),"), we're using several ",(0,t.jsx)(n.code,{children:"useState"})," hooks to manage our application state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const [images, setImages] = useState([]);\nconst [selectedImage, setSelectedImage] = useState(null);\nconst [dialogOpen, setDialogOpen] = useState(false);\nconst [navValue, setNavValue] = useState(0);\nconst [themeMode, setThemeMode] = useState('system');\nconst [isDarkMode, setIsDarkMode] = useState(false);\nconst [loading, setLoading] = useState(false);\nconst [imageDialogOpen, setImageDialogOpen] = useState(false);\nconst [menuAnchorEl, setMenuAnchorEl] = useState(null);\n"})}),"\n",(0,t.jsx)(n.p,{children:"These state variables manage different aspects of our application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"images"}),": Stores the list of images fetched from the backend"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selectedImage"}),": Keeps track of the image selected for viewing or deletion"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dialogOpen"}),": Controls the visibility of the image viewer dialog"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navValue"}),": Manages the selected value in the bottom navigation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"themeMode"}),": Stores the current theme mode ('light', 'dark', or 'system')"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isDarkMode"}),": A boolean indicating whether dark mode is active"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"loading"}),": Indicates whether a loading operation is in progress"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"imageDialogOpen"}),": Controls the visibility of the image upload/capture dialog"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"menuAnchorEl"}),": Stores the anchor element for the options menu"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fetching-images-and-error-handling",children:"Fetching Images and Error Handling"}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"useCallback"})," hook to memoize our ",(0,t.jsx)(n.code,{children:"fetchImages"})," function, and the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook to call it when the component mounts. We also implement error handling and loading state management:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const fetchImages = useCallback(async () => {\n  setLoading(true);\n  try {\n    const response = await axios.get(`${API_URL}/list-images`);\n    setImages(response.data.images);\n    enqueueSnackbar('Images loaded successfully', { variant: 'success' });\n  } catch (error) {\n    console.error('Error fetching images:', error);\n    enqueueSnackbar('Error fetching images', { variant: 'error' });\n  } finally {\n    setLoading(false);\n  }\n}, [API_URL, enqueueSnackbar]);\n\nuseEffect(() => {\n  fetchImages();\n}, [fetchImages]);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note the use of ",(0,t.jsx)(n.code,{children:"setLoading(true)"})," at the start of the operation and ",(0,t.jsx)(n.code,{children:"setLoading(false)"})," in the ",(0,t.jsx)(n.code,{children:"finally"})," block. This ensures that the loading state is properly managed regardless of whether the operation succeeds or fails."]}),"\n",(0,t.jsx)(n.h2,{id:"managing-theme",children:"Managing Theme"}),"\n",(0,t.jsx)(n.p,{children:"We use state to manage the theme and provide a function to toggle it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const handleToggleThemeMode = () => {\n  if (themeMode === 'system') {\n    setThemeMode('light');\n    setIsDarkMode(false);\n  } else if (themeMode === 'light') {\n    setThemeMode('dark');\n    setIsDarkMode(true);\n  } else {\n    setThemeMode('system');\n    checkDarkMode();\n  }\n};\n\nconst checkDarkMode = useCallback(() => {\n  const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n  if (themeMode === 'system') {\n    setIsDarkMode(systemDarkMode);\n  }\n}, [themeMode]);\n\nuseEffect(() => {\n  checkDarkMode();\n}, [themeMode, checkDarkMode]);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"handling-image-upload-and-camera-integration",children:"Handling Image Upload and Camera Integration"}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.code,{children:"useRef"})," to create a reference to the file input element, and ",(0,t.jsx)(n.code,{children:"useCallback"})," to memoize our upload functions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const fileInputRef = useRef(null);\n\nconst uploadImage = useCallback(async (file) => {\n  setLoading(true);\n  try {\n    const presignedResponse = await axios.post(`${API_URL}/get-presigned-url`, {\n      filename: file.name,\n      filetype: file.type\n    });\n\n    const { url, fields } = presignedResponse.data;\n    const formData = new FormData();\n    Object.entries(fields).forEach(([key, value]) => formData.append(key, value));\n    formData.append('file', file);\n\n    await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });\n\n    fetchImages();\n    enqueueSnackbar('Image uploaded successfully', { variant: 'success' });\n  } catch (error) {\n    console.error('Error uploading image:', error);\n    enqueueSnackbar('Error uploading image', { variant: 'error' });\n  } finally {\n    setLoading(false);\n  }\n}, [API_URL, enqueueSnackbar, fetchImages]);\n\nconst takePicture = useCallback(async () => {\n  setImageDialogOpen(false);\n  try {\n    const image = await Camera.getPhoto({\n      quality: 90,\n      allowEditing: true,\n      resultType: CameraResultType.Uri\n    });\n\n    const randomFileName = `captured-image-${Date.now()}-${Math.random().toString(36).substring(2, 15)}.jpg`;\n\n    const file = await fetch(image.webPath)\n      .then(res => res.blob())\n      .then(blob => new File([blob], randomFileName, { type: 'image/jpeg' }));\n    \n    await uploadImage(file);\n  } catch (error) {\n    console.error('Error capturing image:', error);\n    enqueueSnackbar('Error capturing image', { variant: 'error' });\n  }\n}, [uploadImage, enqueueSnackbar]);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Our application uses environment variables to manage configuration. In React, environment variables are prefixed with ",(0,t.jsx)(n.code,{children:"REACT_APP_"}),". We access our API URL like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const API_URL = process.env.REACT_APP_API_URL;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to set up your ",(0,t.jsx)(n.code,{children:".env"})," file in the root of your project with the necessary variables:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"REACT_APP_API_URL=https://your-api-gateway-url.amazonaws.com/prod\n"})}),"\n",(0,t.jsx)(n.h2,{id:"error-handling-and-notifications",children:"Error Handling and Notifications"}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"notistack"})," library for displaying notifications to the user. The ",(0,t.jsx)(n.code,{children:"enqueueSnackbar"})," function is used throughout the application to show success and error messages:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useSnackbar } from 'notistack';\n\nfunction Album() {\n  const { enqueueSnackbar } = useSnackbar();\n\n  // ... other code ...\n\n  enqueueSnackbar('Success message', { variant: 'success' });\n  enqueueSnackbar('Error message', { variant: 'error' });\n\n  // ... other code ...\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading State"}),"\n",(0,t.jsxs)(n.p,{children:["We use a ",(0,t.jsx)(n.code,{children:"loading"})," state variable to track when API calls are in progress. This is used to display a loading indicator:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"{loading && <LinearProgress />}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"We've implemented comprehensive state management in our PhotoSky application using React hooks. We're using:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useState"})," for managing local state (images, theme, dialogs, etc.)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useEffect"})," for side effects (fetching images, checking dark mode)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useCallback"})," for memoizing functions (fetch images, upload, take picture)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useRef"})," for creating a reference to the file input element"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We've also implemented error handling, loading states, and a notification system to provide a smooth user experience. By using environment variables, we've made our application configurable and easier to deploy to different environments."}),"\n",(0,t.jsx)(n.p,{children:"This approach allows us to manage our application's state efficiently, ensuring that our UI stays in sync with our data and that we're not unnecessarily re-rendering components or recreating functions. It also provides a robust way to handle asynchronous operations and keep the user informed about the application's status."}),"\n",(0,t.jsx)(n.p,{children:"In the next section, we'll focus on integrating our frontend with the backend API, implementing the full functionality of our PhotoSky application."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);