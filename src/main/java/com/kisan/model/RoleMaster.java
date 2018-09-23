package com.kisan.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="role_master",schema="test")
public class RoleMaster {
	
	@Column(name =  "ROLE_ID")
	@Id
	private int roleId;
	
	@Column(name =  "ROLE_NAME")
	private String roleName;
	
	@Column(name =  "ROLE_DESC")
	private String roleDesc;
	
	@Column(name =  "CREATE_DATE")
	private Date createDate;

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleDesc() {
		return roleDesc;
	}

	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

}
