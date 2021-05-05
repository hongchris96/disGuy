export const fetchServerMembers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/server_members`
  });
};

export const createServerMember = (serverMember) => {
  return $.ajax({
    method: "POST",
    url: `/api/server_members`,
    data: {server_member: serverMember}
  });
};

export const deleteServerMember = (serverMemberId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/server_members/${serverMemberId}`
  });
};