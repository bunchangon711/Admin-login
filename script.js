document.addEventListener('DOMContentLoaded', function() {
  const adminLoginForm = document.getElementById('adminLoginForm');

  const demoAccounts = {
    admin: {
       username: 'admin',
       password: 'admin123'
    },
    user: {
       username: 'user',
       password: 'user123'
    }
   };

  adminLoginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const adminUsername = adminLoginForm.adminUsername.value;
    const adminPassword = adminLoginForm.adminPassword.value;
   
    let isLoginSuccessful = false;
    for (const account in demoAccounts) {
       if (demoAccounts[account].username === adminUsername && demoAccounts[account].password === adminPassword) {
         isLoginSuccessful = true;
         break;
       }
    }
   
    if (isLoginSuccessful) {
       alert('Đăng nhập Admin thành công!');
       window.location.href = 'https://bunchangon711.github.io/Admin-dashboard/';
    } else {
       alert('Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.');
    }
   });
});
