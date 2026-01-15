import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import { Friends, type Friend } from "../../../data/friend";
import styles from "./styles.module.scss";

export default function FriendAdmin(): JSX.Element {
	const [friends, setFriends] = useState<Friend[]>([...Friends]);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);
	const [formData, setFormData] = useState<Friend>({
		avatar: "",
		description: "",
		title: "",
		website: ""
	});

	const handleAdd = () => {
		setEditingIndex(-1); // -1 表示新增
		setFormData({
			avatar: "",
			description: "",
			title: "",
			website: ""
		});
	};

	const handleEdit = (index: number) => {
		setEditingIndex(index);
		setFormData({ ...friends[index] });
	};

	const handleDelete = (index: number) => {
		if (confirm("确定要删除这个友链吗？")) {
			const newFriends = friends.filter((_, i) => i !== index);
			setFriends(newFriends);
		}
	};

	const handleSave = () => {
		if (!formData.title || !formData.website) {
			alert("请填写必填项（昵称和网址）");
			return;
		}

		if (editingIndex === -1) {
			// 新增
			setFriends([...friends, formData]);
		} else if (editingIndex !== null) {
			// 编辑
			const newFriends = [...friends];
			newFriends[editingIndex] = formData;
			setFriends(newFriends);
		}

		setEditingIndex(null);
		setFormData({
			avatar: "",
			description: "",
			title: "",
			website: ""
		});
	};

	const handleCancel = () => {
		setEditingIndex(null);
		setFormData({
			avatar: "",
			description: "",
			title: "",
			website: ""
		});
	};

	const generateCode = () => {
		const code = `export const Friends: Friend[] = [
${friends.map(f => `\t{
\t\tavatar: "${f.avatar || ""}",
\t\tdescription: "${f.description}",
\t\ttitle: "${f.title}",
\t\twebsite: "${f.website}"
\t}`).join(",\n")}
];

export interface Friend {
\ttitle: string
\tdescription: string
\twebsite: string
\tavatar?: any
}

// 昵称：LanM
// 网址：https://bluelanm.github.io
// 站点图标：https://bluelanm.github.io/my-website/img/3.ico
// 描述：蓝莓`;

		return code;
	};

	const copyToClipboard = () => {
		const code = generateCode();
		navigator.clipboard.writeText(code).then(() => {
			alert("已复制到剪贴板！请手动替换 data/friend.ts 文件的内容");
		});
	};

	return (
		<Layout title="友链管理" description="管理友链">
			<div className={styles.adminContainer}>
				<h1>友链管理后台</h1>

				<div className={styles.actions}>
					<button onClick={handleAdd} className={styles.btnAdd}>
            ➕ 添加新友链
					</button>
					<button onClick={copyToClipboard} className={styles.btnCopy}>
            📋 复制代码到剪贴板
					</button>
				</div>

				{editingIndex !== null && (
					<div className={styles.editForm}>
						<h2>{editingIndex === -1 ? "添加友链" : "编辑友链"}</h2>
						<div className={styles.formGroup}>
							<label>昵称 *</label>
							<input
								type="text"
								value={formData.title}
								onChange={(e) => setFormData({ ...formData, title: e.target.value })}
								placeholder="请输入昵称"
							/>
						</div>
						<div className={styles.formGroup}>
							<label>描述</label>
							<input
								type="text"
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
								placeholder="请输入描述"
							/>
						</div>
						<div className={styles.formGroup}>
							<label>网址 *</label>
							<input
								type="url"
								value={formData.website}
								onChange={(e) => setFormData({ ...formData, website: e.target.value })}
								placeholder="https://example.com"
							/>
						</div>
						<div className={styles.formGroup}>
							<label>头像链接</label>
							<input
								type="url"
								value={formData.avatar}
								onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
								placeholder="https://example.com/avatar.jpg"
							/>
							{formData.avatar && (
								<img src={formData.avatar} alt="预览" className={styles.avatarPreview} />
							)}
						</div>
						<div className={styles.formActions}>
							<button onClick={handleSave} className={styles.btnSave}>
                💾 保存
							</button>
							<button onClick={handleCancel} className={styles.btnCancel}>
                ❌ 取消
							</button>
						</div>
					</div>
				)}

				<div className={styles.friendList}>
					<h2>当前友链列表 ({friends.length})</h2>
					<table>
						<thead>
							<tr>
								<th>头像</th>
								<th>昵称</th>
								<th>描述</th>
								<th>网址</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							{friends.map((friend, index) => (
								<tr key={index}>
									<td>
										{friend.avatar && (
											<img src={friend.avatar} alt={friend.title} className={styles.avatar} />
										)}
									</td>
									<td>{friend.title}</td>
									<td>{friend.description}</td>
									<td>
										<a href={friend.website} target="_blank" rel="noopener noreferrer">
											{friend.website}
										</a>
									</td>
									<td>
										<button onClick={() => handleEdit(index)} className={styles.btnEdit}>
                      ✏️ 编辑
										</button>
										<button onClick={() => handleDelete(index)} className={styles.btnDelete}>
                      🗑️ 删除
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className={styles.codePreview}>
					<h2>生成的代码预览</h2>
					<pre>
						<code>{generateCode()}</code>
					</pre>
				</div>

				<div className={styles.instructions}>
					<h3>使用说明</h3>
					<ol>
						<li>点击 "添加新友链" 按钮添加友链，或点击 "编辑" 按钮修改现有友链</li>
						<li>编辑完成后，点击 "复制代码到剪贴板" 按钮</li>
						<li>打开 <code>data/friend.ts</code> 文件，粘贴替换全部内容</li>
					</ol>
				</div>
			</div>
		</Layout>
	);
}