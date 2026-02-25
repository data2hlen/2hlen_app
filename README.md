# 2HLEN Viewer

This is a Next.js project configured to be wrapped into a native mobile application using Capacitor.

## Development

To run the development server for testing your web app:

```bash
npm run dev
```

## Building for Mobile (Capacitor)

The project is ready to be compiled into a native Android application.

**Prerequisites:**
- You have Android Studio installed on your local computer.
- You have run `npm install` to install all dependencies.

**Steps:**

1.  **Build the Web App:**
    This command compiles your Next.js application into a static `out` folder, which Capacitor will use.
    ```bash
    npm run build
    ```

2.  **Sync with the Native Project:**
    This command copies your web assets into the `android` project folder.
    ```bash
    npm run sync
    ```

3.  **Download the Native Project:**
    - In your IDE's file explorer (on the left), right-click the `android` folder.
    - Select **"Zip & Download"**. This will save an `android.zip` file to your computer.

4.  **Open in Android Studio:**
    - **Unzip** the downloaded `android.zip` file on your local computer.
    - Open the **Android Studio** application.
    - From the welcome screen, choose **"Open"**.
    - Navigate to where you unzipped the folder and select the `android` directory to open it.

5.  **Build the App:**
    - Once the project is open and has finished syncing in Android Studio, you can use the standard build process to create your `.aab` or `.apk` file for the Google Play Store. Go to the menu **Build > Build Bundle(s) / APK(s)**.
