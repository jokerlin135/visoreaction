# Photo Enhance App - React Native Expo

Ứng dụng React Native Expo để enhance ảnh, aging simulation và các tính năng AI photo. Sẵn sàng build mobile app (Android/iOS) qua Expo Cloud EAS.

## 📱 Cấu trúc Project

### Folder `react-native/` - MOBILE APP (EXPO)
```
react-native/
├── App.tsx                    # Main app với React Native
├── components/                # 22 screens React Native
│   ├── IntroPage.tsx         # Intro pages
│   ├── HomeScreen.tsx        # Home screen
│   ├── AIToolsScreen.tsx     # AI tools
│   ├── IAPPage.tsx           # In-app purchase
│   └── ... (18 screens khác)
├── app.json                  # Expo config
├── eas.json                  # EAS build config
├── package.json              # Dependencies
└── EXPO_BUILD_GUIDE.md       # Hướng dẫn build chi tiết
```

### Folder gốc - WEB VERSION (VITE)
```
├── App.tsx                   # Web app với Vite + React
├── components/               # Web components (Tailwind CSS)
├── vite.config.ts           # Vite config
└── package.json             # Web dependencies
```

## ✅ Setup hiện tại

### React Native Expo (Mobile)
- ✅ Expo SDK 51.0.39
- ✅ React Native 0.74.5  
- ✅ 22 screens hoàn chỉnh
- ✅ EAS build config sẵn sàng
- ✅ TypeScript support
- ✅ expo-linear-gradient cho gradients
- ✅ @expo/vector-icons cho icons

### Web Version (Vite)
- ✅ React 18.2.0 + Vite 5.x
- ✅ Tailwind CSS + ShadCN UI
- ✅ Configured cho Replit (allowedHosts fixed)
- ✅ Port 5000 configured

## 🚀 Development

### Preview trên Replit (Web version)
Web version đang chạy tại port 5000 để preview nhanh trong Replit.

### Mobile Development với Expo
```bash
cd react-native

# Start Expo
npm start

# Scan QR code với Expo Go app trên điện thoại
```

## 📦 Build Mobile App (Android/iOS)

### Quick Start
```bash
cd react-native

# Install EAS CLI (lần đầu)
npm install -g eas-cli
eas login

# Configure EAS (lần đầu)
eas build:configure

# Build Android APK
eas build --platform android --profile preview

# Build cho iOS (cần Apple Developer Account)
eas build --platform ios --profile production
```

### Chi tiết đầy đủ
Xem file `react-native/EXPO_BUILD_GUIDE.md` cho hướng dẫn chi tiết về:
- Cách setup EAS
- Build profiles
- Upload lên stores
- Troubleshooting

## 🎯 Workflow hiện tại

### Expo Server
- Command: `cd react-native && npx expo start --web --port 5000`
- Port: 5000
- Type: Web preview (cho development trong Replit)

### Để build mobile thật
Không cần Replit! Build mobile app bằng EAS Cloud:
1. `eas login`
2. `eas build:configure` 
3. `eas build --platform android`
4. Download APK/IPA về điện thoại

## 📝 TODO trước khi build production

### 1. App Icons & Assets
Tạo trong `react-native/assets/`:
- [ ] `icon.png` - 1024x1024px
- [ ] `adaptive-icon.png` - 1024x1024px  
- [ ] `splash.png` - 1284x2778px
- [ ] `favicon.png` - 48x48px

### 2. Bundle Identifiers
Update trong `react-native/app.json`:
```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.yourcompany.photoenhanceapp"
    },
    "android": {
      "package": "com.yourcompany.photoenhanceapp"
    }
  }
}
```

### 3. EAS Project ID
Sau khi chạy `eas build:configure`, project ID sẽ được tạo tự động.

### 4. Dependencies version
Update nếu cần:
- `react-dom@18.2.0` (hiện tại: 19.2.0)
- `typescript@~5.3.3` (hiện tại: 5.9.3)

## 🔧 Lỗi và Fixes

### ✅ Fixed: Vite allowedHosts error
```ts
// vite.config.ts đã config:
server: {
  allowedHosts: ['.replit.dev', '.repl.co']
}
```

### ✅ Fixed: Expo web dependencies
Đã cài:
- react-native-web
- @expo/metro-runtime  
- react-dom

## 📚 Resources

- **EAS Build**: https://docs.expo.dev/build/introduction/
- **Expo Go App**: Download từ App Store/Play Store để test
- **Chi tiết build**: Xem `react-native/EXPO_BUILD_GUIDE.md`

## 💡 User Preferences

Không có preferences đặc biệt.

## 📅 Recent Changes

### October 2025 - Replit Setup
- ✅ Fixed Vite allowedHosts cho Replit preview
- ✅ Setup React Native Expo cho mobile build
- ✅ Cài đặt dependencies cho Expo web preview
- ✅ Tạo EXPO_BUILD_GUIDE.md với hướng dẫn đầy đủ
- ✅ Configure EAS build profiles

## 🎯 Next Steps

1. **Tạo app icons** trong `react-native/assets/`
2. **Update bundle identifiers** trong `app.json`
3. **Run `eas build:configure`** để setup EAS
4. **Build APK**: `eas build --platform android`
5. **Test trên thiết bị thật**
6. **Publish lên stores** khi ready

---

**Note**: Project này có cả web (Vite) và mobile (Expo) version. Dùng folder `react-native/` cho mobile development và EAS builds.
