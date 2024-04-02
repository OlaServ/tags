export type TagItemType = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

export type TagsTableType = {
  items: [TagItemType];
};
