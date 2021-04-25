
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS item_kind;
DROP TABLE IF EXISTS item_category;
DROP TABLE IF EXISTS unit_of_measure;
DROP TABLE IF EXISTS org_stock;
DROP TABLE IF EXISTS org_maintainer;
DROP TABLE IF EXISTS org;
DROP TABLE IF EXISTS maintainer_stock;
DROP TABLE IF EXISTS maintainer;
DROP TABLE IF EXISTS stock;
DROP EXTENSION IF EXISTS "uuid-ossp";

CREATE EXTENSION "uuid-ossp";

-- represents a unit of measure one can use to quantify an item.
CREATE TABLE unit_of_measure (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	name VARCHAR
);

-- represents a broader range of similar but distinct kinds of items.
CREATE TABLE item_category (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	name VARCHAR
);

-- represents a specific type of item (e.g. rain coat).
CREATE TABLE item_kind (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	name VARCHAR
);

-- represents a grouping of items.
CREATE TABLE stock (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	name VARCHAR
);

-- represents a specific quantity of an item of a given kind within a given stock.
CREATE TABLE item (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	quantity INTEGER,
	stock_id UUID REFERENCES stock(id),
	unit_of_measure_id UUID REFERENCES unit_of_measure(id),
	item_kind_id UUID REFERENCES item_kind(id)
);

-- represents a person who can add and remove items to and from a stock.
CREATE TABLE maintainer (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	name VARCHAR
);

-- represents one to many relationship between maintainer and stocks.
CREATE TABLE maintainer_stock (
	maintainer_id UUID REFERENCES maintainer(id),
	stock_id UUID REFERENCES stock(id)
);

-- represnts an organization (a grouping of maintainers and stocks).
CREATE TABLE org (
	id UUID PRIMARY KEY default uuid_generate_v4(),
	name VARCHAR
);

-- represents one to many relationship between org and stocks.
CREATE TABLE org_stock (
	org_id UUID REFERENCES org(id),
	stock_id UUID REFERENCES stock(id)
);

-- represents many to many relationship between orgs and maintainers.
CREATE TABLE org_maintainer (
	org_id UUID REFERENCES org(id),
	maintainer_id UUID REFERENCES maintainer(id)
);

