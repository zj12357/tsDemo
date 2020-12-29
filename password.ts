/*
 * @Version:  ;
 * @Description:  ;
 * @Autor: Stock
 * @Date: 2020-12-29 22:49:24
 */
checkPsd(rule, value, callback) {
    let password2 = this.props.form.getFieldValue('password2');
    if (password2 && password2 !== value) {
      callback(new Error('两次密码输入不一致'));
    } else {
      callback();
    }
  }
 
  checkPsd2(rule, value, callback) {
    let password = this.props.form.getFieldValue('password');
    if (password && password !== value) {
      callback(new Error('两次密码输入不一致'));
    } else {
      callback();
    }
  }

  
  <FormItem label='密码：'>
  {getFieldDecorator('password', {
    rules: [
      { required: true, message: '请输入密码' },
      { validator: (rule, value, callback) => { this.checkPsd(rule, value, callback) } }
    ],
    validateTrigger: 'onBlur'
  })(
    <Input />
  )}
</FormItem>
<FormItem label='再次输入密码：'>
  {getFieldDecorator('password2', {
    rules: [
      { required: true, message: '请输入密码' },
      { validator: (rule, value, callback) => { this.checkPsd2(rule, value, callback) } }
    ],
    validateTrigger: 'onBlur'
  })(
    <Input />
  )}
</FormItem>
