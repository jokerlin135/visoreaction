export function AdMobBanner() {
  return (
    <div className="px-4 pb-4">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="text-pink-100 text-sm font-semibold mb-1">
              ✨ Glow Beauty - Làn da hoàn hảo!
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded px-2 py-1">
                <span className="text-pink-600 text-xs font-bold">GLOW</span>
              </div>
              <span className="text-pink-100 text-xs">Tự tin mỗi ngày</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1679584352584-f07655bbadea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHdvbWFuJTIwZmFjZSUyMGNyZWFtfGVufDF8fHx8MTc1OTc2Mzg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beauty Skincare"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}