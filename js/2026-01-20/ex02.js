const users = [
    { id: 1, account: "admin", password: "123456", role: "admin", isActive: true },
    { id: 2, account: "user01", password: "abc123", role: "user", isActive: true },
    { id: 3, account: "user02", password: "111111", role: "user", isActive: false },
    { id: 4, account: "teacher", password: "teach2025", role: "teacher", isActive: true }
]


/*
* account / pass
*
* nếu đúng và đang hoạt động -> log "đăng nhập thành công"
* nếu tài khoản đúng nhưng active = false -> người dùng đã bị xóa
* nếu sai -> "tài khoản hoặc mật khẩu không đúng"
* */

const login = (account, password ) => {
    const user = users.find(user => user.account === account && user.password ===password && user.isActive === true)
    return user ? "login ok" : "account / pass is correct"
    


}

console.log(login("admin", "1234567"))