// components/Footer.tsx
export default function Footer() {
    return (
      
      <footer className="text-gray-50 px-4 sm:px-6 pt-12 pb-5 font-[sans-serif]">
        <hr />
        <br />
        <br />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="space-y-3">
          <h6 className="text-sm text-black font-medium">Funiro</h6>
          <ul className="space-y-1">
            <li className="text-[13px] text-gray-400">400 University Drive Suite 200 Caral</li>
            <li className="text-[13px] text-gray-400 hover:text-white">Gables</li>
            <li className="text-[13px] text-gray-400 hover:text-white">FL 33134 USA</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm text-gray-400 font-medium">LINKS</h6>
          <ul className="space-y-2">
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">Home</a></li>
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">Shop</a></li>
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">About</a></li>
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">Contact</a></li>
            
          </ul>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm text-gray-400 font-medium">Help</h6>
          <ul className="space-y-1">
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">Payment Options</a></li>
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">Returns</a></li>
            <li><a href="javascript:void(0)" className="text-[13px] text-black hover:text-white">Privacy Policy</a></li>
            
          </ul>
        </div>
        <div className="space-y-2.5">
          <h6 className="text-sm text-white font-medium">Newsletter</h6>
          <ul className="space-y-2">
            <li className="text-[15px] text-black hover:text-yellow-50"><u>Enter Your Email Address</u></li>            
            
          </ul>
        </div>
        <div>
            <br />
            <h6 className="text-sm text-black font-medium"><u>SUBSCRIBE </u></h6>  
            
          
        </div>
</div> 


        

        <hr />
        <p className='text-black'>&copy; 2023 Furino. All rights reserved.</p>
      </footer>
    );
  }
  