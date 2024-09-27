import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="font-semibold">Listmedia</h3>
          <p className="text-sm">© 2023 All rights reserved</p>
        </div>
        <div className="space-y-2">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
