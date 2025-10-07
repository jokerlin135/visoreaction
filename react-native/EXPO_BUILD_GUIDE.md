# Hướng dẫn Build React Native Expo - Android/iOS

## 📱 Tổng quan

App này đã được setup sẵn để build mobile app (Android/iOS) qua **Expo Application Services (EAS)**.

## ✅ Checklist Code đã có sẵn

### Dependencies
- ✅ Expo SDK 51
- ✅ React Native 0.74.5
- ✅ expo-linear-gradient cho gradient effects
- ✅ @expo/vector-icons cho icons
- ✅ TypeScript support

### Configuration Files
- ✅ `app.json` - Expo config với bundle identifiers
- ✅ `eas.json` - EAS build profiles (development, preview, production)
- ✅ `babel.config.js` - Babel config
- ✅ `tsconfig.json` - TypeScript config

### Components
- ✅ 22 screens React Native hoàn chỉnh
- ✅ Intro flow (4 pages)
- ✅ Home screen
- ✅ AI Tools screens
- ✅ IAP pages
- ✅ Settings, Profile, và các features khác

## 🚀 Cách Build Mobile App với EAS

### Bước 1: Setup EAS CLI (làm 1 lần)

```bash
# Cài EAS CLI global
npm install -g eas-cli

# Login vào Expo account (tạo account nếu chưa có tại https://expo.dev)
eas login
```

### Bước 2: Configure Project

```bash
cd react-native

# Configure EAS (lần đầu tiên)
eas build:configure
```

Lệnh này sẽ:
- Tạo Expo project ID
- Update `app.json` với project ID
- Link project với Expo account của bạn

### Bước 3: Build cho Android

```bash
# Build APK (development)
eas build --platform android --profile preview

# Build APK (production) 
eas build --platform android --profile production

# Build AAB cho Google Play Store
eas build --platform android --profile production
```

### Bước 4: Build cho iOS (cần Apple Developer Account)

```bash
# Build cho iOS
eas build --platform ios --profile production
```

**Lưu ý iOS:**
- Cần Apple Developer Account ($99/năm)
- Cần setup Bundle Identifier trong Apple Developer Portal
- Update `ios.bundleIdentifier` trong `app.json`

### Bước 5: Download & Install APK

Sau khi build xong:
1. EAS sẽ cho link download APK/IPA
2. Download về điện thoại
3. Install và test app

## 📝 Cấu hình quan trọng cần update

### 1. Bundle Identifiers (trong `app.json`)

```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.yourcompany.photoenhanceapp"  // ← Đổi thành tên của bạn
    },
    "android": {
      "package": "com.yourcompany.photoenhanceapp"  // ← Đổi thành tên của bạn
    }
  }
}
```

### 2. App Icons & Splash Screen

Tạo assets trong folder `assets/`:
- `icon.png` - 1024x1024px (app icon)
- `adaptive-icon.png` - 1024x1024px (Android adaptive icon)
- `splash.png` - 1284x2778px (splash screen)
- `favicon.png` - 48x48px (web favicon)

### 3. EAS Project ID

Sau khi chạy `eas build:configure`, file `app.json` sẽ được update với `projectId`:

```json
{
  "expo": {
    "extra": {
      "eas": {
        "projectId": "your-actual-project-id"  // ← Được tạo tự động
      }
    }
  }
}
```

## 🔧 Build Profiles trong `eas.json`

```json
{
  "build": {
    "development": {
      "developmentClient": true,  // Include dev tools
      "distribution": "internal"   // Internal distribution
    },
    "preview": {
      "distribution": "internal",  // APK cho test
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "apk"        // Đổi thành "app-bundle" cho Play Store
      }
    }
  }
}
```

## 🎯 Workflow build thực tế

### Development Build (để test trong dev)
```bash
eas build --profile development --platform android
```

### Preview Build (để test production-like)
```bash
eas build --profile preview --platform android
```

### Production Build (cho store)
```bash
# Android - APK
eas build --profile production --platform android

# Android - AAB cho Google Play
# Đổi buildType thành "app-bundle" trong eas.json trước
eas build --profile production --platform android

# iOS - cho App Store
eas build --profile production --platform ios
```

## 📱 Test trên thiết bị thật

### Android
1. Build APK với profile `preview`
2. Download APK từ EAS
3. Enable "Unknown sources" trên Android
4. Install APK

### iOS (cần Apple Developer)
1. Add device UDID vào Apple Developer Portal
2. Build với Ad Hoc provisioning
3. Download IPA
4. Install qua Xcode/TestFlight

## 🚀 Publish lên Store

### Google Play Store
1. Build AAB: `eas build --platform android --profile production`
2. Download AAB file
3. Upload lên Google Play Console
4. Setup store listing
5. Submit for review

### Apple App Store
1. Build IPA: `eas build --platform ios --profile production`
2. EAS tự động upload lên App Store Connect
3. Hoặc dùng: `eas submit --platform ios`
4. Setup store listing trong App Store Connect
5. Submit for review

## 💡 Tips & Best Practices

1. **Test trước khi build production:**
   - Dùng `preview` profile để test
   - Check app trên nhiều devices khác nhau

2. **Icons & Splash screens:**
   - Cần tạo đầy đủ trước khi build
   - Dùng tool như [App Icon Generator](https://www.appicon.co/)

3. **Bundle Identifiers:**
   - Phải unique và match với store accounts
   - Format: `com.companyname.appname`

4. **Version management:**
   - Update `version` trong `app.json` trước mỗi build
   - Follow semantic versioning (1.0.0, 1.0.1, etc.)

5. **Build logs:**
   - Check build logs tại: https://expo.dev
   - Xem chi tiết errors và warnings

## 🔗 Resources

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)
- [Expo Application Services](https://expo.dev/eas)
- [App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Guidelines](https://play.google.com/console/about/guides/releasewithconfidence/)

## ❓ Troubleshooting

### Build failed
- Check build logs tại expo.dev
- Verify bundle identifiers
- Check dependencies compatibility

### Can't install APK
- Enable "Unknown sources" trên Android
- Check Android version compatibility

### iOS build issues
- Verify Apple Developer account
- Check provisioning profiles
- Ensure bundle ID is registered

## 📞 Support

- Expo Discord: https://chat.expo.dev
- Expo Forums: https://forums.expo.dev
- GitHub Issues: https://github.com/expo/expo/issues
