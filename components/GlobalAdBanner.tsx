import { Download } from "lucide-react";

export function GlobalAdBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between shadow-lg z-50">
      {/* Left side - App info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">G</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Grab (VN)</h3>
          <p className="text-sm text-gray-600">Giao hàng & Di chuyển</p>
        </div>
      </div>

      {/* Right side - Download button */}
      <div className="flex items-center gap-2">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
          <Download size={16} />
          <span className="font-medium">Tải</span>
        </button>
      </div>
    </div>
  );
}